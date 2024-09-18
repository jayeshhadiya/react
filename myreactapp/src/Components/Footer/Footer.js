// Footer.js
import React from 'react';
import './Footer.css'; // Import the CSS file
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 jayeshhadiya.site. All rights reserved.</p>
        <div className="footer-links">
          <a href="/about"><Link to="/about">About</Link></a>
          <a href="/contact"><Link to="/contact">Contact</Link></a>
        </div>
        <div className="social-media">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> |
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a> |
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
