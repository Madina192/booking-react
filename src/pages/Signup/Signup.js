import React from 'react';
import background from "../../imgs/alatoo.jpg";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {registration} from "../../http/userAPI";

const Signup = ({setIsLoggedIn, userEmail, setUserEmail, emailReg, setEmailReg, firstNameReg, setFirstNameReg, lastNameReg, setLastNameReg, passwordReg, setPasswordReg}) => {
    const handleSignUp = (e) => {
        e.preventDefault()
        setIsLoggedIn(true)
        navigate('/', {replace: true})
        localStorage.setItem("isLoggedIn", true)
        localStorage.setItem("userName", userEmail)
    }
    const navigate = useNavigate()

    const goToSignUp = () => {
        navigate('/login') 
    }
    const emailHandler = (e) => {
        setUserEmail(e.target.value)
        setEmailReg(e.target.value)
    }

    const signUp = async () => {
        const response = await registration(emailReg, passwordReg, firstNameReg, lastNameReg)
        console.log("hello");
    }

    return (
        <div className='login'>
            <img className='login-img' src={background} alt=""/>
            <div className="signup-box">
                <h3 className="login-title">Fill in the form to book</h3>
                <h3 className="login-text">Sign up</h3>
                <form action="" className="form" >
                    <input type="text" className="input" placeholder='Enter your email' required onChange={emailHandler} value={emailReg}/>
                    <input type="text" className="input" placeholder='Enter your name' required onChange={(e) => setFirstNameReg(e.target.value)} value={firstNameReg}/>
                    <input type="text" className="input" placeholder='Enter your last name' required onChange={(e) => setLastNameReg(e.target.value)} value={lastNameReg}/>
                    <input type="password" className="input" placeholder='Create a password' required onChange={(e) => setPasswordReg(e.target.value)} value={passwordReg}/>
                    <button className="login-btn" type='click' onClick={signUp}>Submit</button>
                </form>
                <div className="question-box">
                    Already have an account?
                    <button className="question-btn" onClick={goToSignUp}>Log in</button>
                </div>
            </div>
        </div>
    );
};

export default Signup;