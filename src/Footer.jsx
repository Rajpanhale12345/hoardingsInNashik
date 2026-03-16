import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import './Footer.css';
import logo from './images/Nashiklogo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* First Section */}
        <div className="footer-top">
          <div className="footer-logo">
            <img src={logo} alt="Hoardings in Nashik Logo" />
          </div>

          <nav className="footer-nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/blog">Blogs</Link>
            <Link to="/sitemap">Sitemap</Link>
          </nav>
        </div>

        {/* Second Section */}
        <div className="footer-bottom">
          <div className="footer-social">
            <a
              href="https://www.facebook.com/brandbanaoai/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/brandbanao.ai/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://in.linkedin.com/company/brand-banao-ai"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://www.youtube.com/@BrandBanao-Ai"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
          </div>

          <p className="footer-copy">
            &copy; {new Date().getFullYear()}{' '}
            <a
              href="https://brandbanao.ai/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Brand Banao.Ai.
            </a>{' '}
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;