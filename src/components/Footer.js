import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2025 CR Wala. All rights reserved.</p>
        <a href="#packages" className="footer-link">
          Explore Packages
        </a>
      </div>
      <div className="social-links">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <i className="fab fa-facebook"></i>
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <i className="fab fa-youtube"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
