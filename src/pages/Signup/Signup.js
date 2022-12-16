import React from 'react';
import background from "../../imgs/alatoo.jpg";
import {useNavigate} from "react-router-dom";
import axios from "axios";

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

    const register = () => {
        axios.post("http://localhost:3001/register", {
            Email: emailReg,
            firstName: firstNameReg,
            lastName: lastNameReg,
            Password: passwordReg
        }).then((response)=> {
            console.log(response)
        })
    }

    return (
        <div className='login'>
            <img className='login-img' src={background} alt=""/>
            <div className="signup-box">
                <h3 className="login-title">Fill in the form to book</h3>
                <h3 className="login-text">Sign up</h3>
                <form action="" className="form" onSubmit={handleSignUp}>
                    <input type="text" className="input" placeholder='Enter your email' required onChange={emailHandler}/>
                    <input type="text" className="input" placeholder='Enter your name' required onChange={(e) => setFirstNameReg(e.target.value)}/>
                    <input type="text" className="input" placeholder='Enter your last name' required onChange={(e) => setLastNameReg(e.target.value)}/>
                    <input type="password" className="input" placeholder='Create a password' required onChange={(e) => setPasswordReg(e.target.value)}/>
                    <button className="login-btn" type='click' onClick={register}>Submit</button>
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