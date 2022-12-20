import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from "../pages/Home";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import {useState} from "react";
import {AuthProvider} from "../components/Auth";
import Football from "../pages/Football";
import Basketball from "../pages/Basketball";
import Volleyball from "../pages/Volleyball";
import Tennis from "../pages/Tennis";
import Dancing from "../pages/Dancing";
import Picnic from "../pages/Picnic";
import Conference from "../pages/Conference";
import Gym from "../pages/Gym";
import Canteen from "../pages/Canteen";
import Map from "../pages/Map";
import Auth2 from "../components/Auth2";

function App() {
    const  [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn") === 'true')
    const  [userEmail, setUserEmail] = useState(null)
    const  [password, setPassword] = useState(null)
    const [emailReg, setEmailReg] = useState('')
    const [firstNameReg, setFirstNameReg] = useState('')
    const [lastNameReg, setLastNameReg] = useState('')
    const [passwordReg, setPasswordReg] = useState('')
  return (
      <AuthProvider>
    <div className="App">
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <Routes>
        <Route path='/' element={<Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} userEmail={userEmail} setUserEmail={setUserEmail}/>}/>
        <Route path='/book' element={<Home/>}/>
        <Route exact='true' path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} userEmail={userEmail} setUserEmail={setUserEmail} emailReg={emailReg} setEmailReg={setEmailReg} firstNameReg={firstNameReg} setFirstNameReg={setFirstNameReg} lastNameReg={lastNameReg} setLastNameReg={setLastNameReg} passwordReg={passwordReg} setPasswordReg={setPasswordReg}/>}/>
        <Route exact='true' path='/signup' element={<Signup setIsLoggedIn={setIsLoggedIn} userEmail={userEmail} setUserEmail={setUserEmail} emailReg={emailReg} setEmailReg={setEmailReg} firstNameReg={firstNameReg} setFirstNameReg={setFirstNameReg} lastNameReg={lastNameReg} setLastNameReg={setLastNameReg} passwordReg={passwordReg} setPasswordReg={setPasswordReg}/>}/>
        <Route path='/map' element={<Map/>}/>
        <Route path='/football' element={<Football/>}/>
        <Route path='/basketball' element={<Basketball/>}/>
        <Route path='/volleyball' element={<Volleyball/>}/>
        <Route path='/tennis' element={<Tennis/>}/>
        <Route path='/dancing' element={<Dancing/>}/>
        <Route path='/picnic' element={<Picnic/>}/>
        <Route path='/conference' element={<Conference/>}/>
        <Route path='/gym' element={<Gym/>}/>
        <Route path='/canteen' element={<Canteen/>}/>
      </Routes>
        <Footer isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
    </div>
      </AuthProvider>
  );
}

export default App;
