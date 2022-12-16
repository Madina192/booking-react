import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import instagram from "../../imgs/Instagram_logo_2016.svg.png"
import alatoo_logo from "../../imgs/logo.png"


const Footer = ({isLoggedIn, setIsLoggedIn}) => {
    return (
        <div className='footer'>
            <div className='footer-box'>
                <FontAwesomeIcon icon={faCopyright} className='copyright'/>
                2022 Ala-Too International University
            </div>
            <div className="footer-icons">
                <a href="">
                    <img src={instagram} alt="" className='footer-icon'/>
                </a>
                <a href="">
                    <img src={alatoo_logo} alt="" className='footer-icon'/>
                </a>

            </div>
        </div>
    );
};

export default Footer;