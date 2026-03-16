import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import './Navbar.css';
import logo from './images/Nashiklogo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt='' />
      </div>

      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
        <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
        <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        <Link to="/blog" onClick={() => setIsOpen(false)}>Blogs</Link>
      </div>

      {/* Social Media Icons */}
      <div className="social-icons">
        <a href="https://www.facebook.com/brandbanaoai/"><FaFacebookF /></a>
        <a href="https://www.instagram.com/brandbanao.ai/?hl=en"><FaInstagram /></a>
        <a href="https://in.linkedin.com/company/brand-banao-ai"><FaLinkedinIn /></a>
        <a href="https://www.youtube.com/@BrandBanao-Ai"><FaYoutube /></a>
      </div>

      <div className="hamburger" onClick={toggleNavbar}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;