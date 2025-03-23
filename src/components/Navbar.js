import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li><a href="#home" className="navbar-item">Home</a></li>
        <li><a href="#about" className="navbar-item">About</a></li>
        <li><a href="#projects" className="navbar-item">Projects</a></li>
        <li><a href="#skills" className="navbar-item">Skills</a></li>
        <li><a href="#contact" className="navbar-item">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
