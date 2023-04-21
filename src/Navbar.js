import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="Navbar">
      <div className="Nav-logo">
        Fatima-ezzahra Saleh
      </div>
      <ul className={`Nav-links ${isOpen ? 'show' : ''}`}>
        
        <li><Link to="/about">About</Link></li>
        <li><Link to="/experience">Experience</Link></li>
        <li><Link to="/education">Education</Link></li>
        <li><Link to="/certifications">Certifications</Link></li>
      </ul>
      <div className={`Nav-toggle ${isOpen ? 'open' : ''}`} onClick={toggleNav}>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default Navbar;
