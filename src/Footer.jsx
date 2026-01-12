import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from './images/Nashiklogo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
       <img src={logo} alt="" />
        
        <nav className="footer-nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <p className="footer-copy">&copy; {new Date().getFullYear()} <Link to="https://brandbanao.ai/">Brand Banao.Ai.</Link> All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
