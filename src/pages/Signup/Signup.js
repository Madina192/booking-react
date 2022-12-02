import React from 'react';
import background from "../../imgs/alatoo.jpg";
import {useNavigate} from "react-router-dom";

const Signup = ({isLoggedIn, setIsLoggedIn, userEmail, setUserEmail}) => {
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
    return (
        <div className='login'>
            <img className='login-img' src={background} alt=""/>
            <div className="signup-box">
                <h3 className="login-title">Fill in the form to book</h3>
                <h3 className="login-text">Sign up</h3>
                <form action="" className="form" onSubmit={handleSignUp}>
                    <input type="text" className="input" placeholder='Enter your email' required onChange={e => setUserEmail(e.target.value)}/>
                    <input type="text" className="input" placeholder='Enter your name' required/>
                    <input type="text" className="input" placeholder='Enter your last name' required/>
                    <input type="password" className="input" placeholder='Create a password' required/>
                    <button className="login-btn" type='submit'>Submit</button>
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