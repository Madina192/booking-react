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

function App() {
    const  [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn") === 'true')
    const  [userEmail, setUserEmail] = useState(null)
  return (
      <AuthProvider>
    <div className="App">
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <Routes>
        <Route path='/' element={<Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} userEmail={userEmail} setUserEmail={setUserEmail}/>}/>
        <Route path='/book' element={<Home/>}/>
        <Route exact='true' path='/login' element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} userEmail={userEmail} setUserEmail={setUserEmail}/>}/>
        <Route exact='true' path='/signup' element={<Signup isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} userEmail={userEmail} setUserEmail={setUserEmail}/>}/>
        <Route path='/map' element={<Home/>}/>
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
