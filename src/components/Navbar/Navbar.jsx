import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const menuText = isMenuOpen ? 'close' : 'menu';
    document.querySelector('.menu').textContent = menuText;
  }, [isMenuOpen])

  return (
    <nav className='container'>
      <div className="logoPart">
        {/* <img src="ccvlSVG.svg" className='filter-white logo' alt="CCVL Logo"/> */}
        <img src="utils/logo_white_bg_prev_ui.png" className='filter-white logo' alt="CCVL Logo"/>
        <h1 className="logoText">CCVL</h1>
      </div>
      <div>
        <ul className={`${isMenuOpen ? 'visibleMenu' : 'invisibleMenu'}`}>
          <li>Research <FontAwesomeIcon icon={faChevronDown} /></li>
          <li>API <FontAwesomeIcon icon={faChevronDown} /></li>
          <li>ChatGPT <FontAwesomeIcon icon={faChevronDown} /></li>
          <li>Safety <FontAwesomeIcon icon={faChevronDown} /></li>
          <li>Company <FontAwesomeIcon icon={faChevronDown} /></li> 
        </ul>
      </div>
      <h3 className="menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>menu</h3>
    </nav>
  );
};

export default Navbar;
