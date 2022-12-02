import React, {useState} from 'react';
import background from "../../imgs/alatoo.jpg";
import { useNavigate } from "react-router-dom"

const Login = ({isLoggedIn, setIsLoggedIn, setUserEmail, userEmail}) => {
    // const auth = useAuth()
    const navigate = useNavigate()
    const handleLogIn =(e) => {
        e.preventDefault()
        setIsLoggedIn(true)
        //auth.logIn()
        navigate('/', {replace: true})
        localStorage.setItem("isLoggedIn", true)
        localStorage.setItem("userName", userEmail)
    }
    const goToSignUp = () => {
        navigate('/signup')
    }

    return (
        <div className='login'>
            <img className='login-img' src={background} alt=""/>
            <div className="login-box">
                <h3 className="login-title">Fill in the form to book</h3>
                <h3 className="login-text">Log in</h3>
                <form action="" className="form" onSubmit={handleLogIn}>
                    <input type="text" className="input" placeholder='Enter your email' required onChange={e => setUserEmail(e.target.value)}/>
                    <input type="password" className="input" placeholder='Enter your password' required/>
                    <button className="login-btn" type='submit'>Submit</button>
                    <div className="question-box">
                        Don't have an account?
                        <button className="question-btn" onClick={goToSignUp}>Sign up</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;