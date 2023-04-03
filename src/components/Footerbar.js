import React from 'react';
import './Footerbar.css';

function Footerbar() {
    const linkedin = require('./resources/linkedin.png');
    const mail = require('./resources/mail.png');
    return (
        <footer className='site-footer-container'>
            <div className="site-footer">
                <ul className="footer-social-icons">
                    <li>
                        <a href="https://www.linkedin.com/in/wilmerlin/" className='linkedin-icon' target="_blank" rel="noopener noreferrer">
                            <img src={linkedin} alt="Logo" /> 
                        </a>
                    </li>
                    <li>
                        <a href="mailto:wilmerl@uci.edu" className='mail-icon' target="_blank" rel="noopener noreferrer">
                            <img src={mail} alt="Logo" />
                        </a>
                    </li>
                </ul>
          </div>
        </footer>
    )
}

export default Footerbar;