import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import resume from './resources/Wilmer_Lin_Resume.pdf';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const logo = require('./resources/W.L_square.png');
    const linkedin = require('./resources/linkedin.png');
    const mail = require('./resources/mail.png')

    return (
      <>
        <header className="site-header">
          <nav className="navbar-container">
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                    Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                    About
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                    Contact
                </Link>
              </li>
              <li className='nav-item'>
                <a className='nav-links' onClick={closeMobileMenu} target="_blank" rel="noopener noreferrer" href={resume}>
                    Resume
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/wilmerlin/" className='nav-item-linkedin' target="_blank" rel="noopener noreferrer">
                  <img src={linkedin} alt="Logo" /> 
                </a>
              </li>
              <li>
                <a href="mailto:wilmerl@uci.edu" className='nav-item-mail' target="_blank" rel="noopener noreferrer">
                  <img src={mail} alt="Logo" />
                </a>
              </li>
            </ul>
          </nav>
          <div className="logo-wrap">
            <Link to="/" className="navbar-logo">
              <img src={logo} alt="Logo" />   
            </Link>
          </div>
          <div className="nav-social">
            <ul className="nav-social-icons">
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
          <div className='menu-icon' onClick ={handleClick}>
            <FontAwesomeIcon icon={click ? faTimes : faBars} />
          </div>
        </header>
      </>
    );
  }
  
  export default Navbar;

  