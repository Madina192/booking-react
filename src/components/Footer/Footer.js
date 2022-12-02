import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'


const Footer = ({isLoggedIn, setIsLoggedIn}) => {
    return (
        <div className='footer'>
            <div className='footer-box'>
                <FontAwesomeIcon icon={faCopyright} className='copyright'/>
                2022 Ala-Too International University
            </div>
            <div className="footer-icons">

            </div>
        </div>
    );
};

export default Footer;