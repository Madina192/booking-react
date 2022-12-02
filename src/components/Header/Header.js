import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import logo from "../../imgs/logo.png"
import {useAuth} from "../Auth";

const Header = ({isLoggedIn, setIsLoggedIn}) => {
    const auth = useAuth()
    const navigate = useNavigate()
    const handleLogOut = () => {
        setIsLoggedIn(false)
        auth.logOut()
        navigate('/')
        localStorage.setItem("isLoggedIn", false)
    }
    return (
        <div>
            <header className="header">
                <img className='header-logo' src={logo} alt=""/>
                <nav className='nav'>
                    <Link className='nav-link' exact='true' to='/'>Home</Link>
                    <Link className='nav-link' exact='true' to='/book'>Book place</Link>
                    <Link className='nav-link' to='/map'>Location</Link>
                    {
                        !isLoggedIn ? (
                                <Link className='nav-link' to='/login'>Log in</Link>
                            )
                        :
                            <Link className='nav-link' to='/'>
                                <button onClick={handleLogOut} className='logout-btn'>Logout</button></Link>
                    }
                    {
                        !isLoggedIn ? (
                            <Link className='nav-link' to='/signup'>Sign up</Link>
                        ) : ''
                    }

                </nav>
            </header>
        </div>
    );
};

export default Header;