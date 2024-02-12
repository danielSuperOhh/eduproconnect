import React, { useState, useEffect } from 'react';
import './navbar.css';
import navVector from '../../assets/navVector.svg';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`navBar ${menuOpen ? 'menuOpen' : ''} ${scrolled ? 'scrolled' : ''}`}>
      <div className="menu-button" onClick={toggleMenu}>
        {menuOpen ? (
          <div className="close">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
              <path d="M6 12h12M12 18V6" stroke="#fffefe" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        ) : (
          <div className="bars">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
              <path d="M3 7h18M3 12h18M3 17h18" stroke="#fffefe" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
        )}
      </div>
      <div className="logo">
        <div className="icon"></div>
        <p>EduProconnect</p>
      </div>
      <div className="navigation">
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <p>About</p>
          <p>Blog</p>
          <p>Help</p>
          <div className='contact'>
            <img src={navVector} alt="" />
            <p>Contact</p>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
