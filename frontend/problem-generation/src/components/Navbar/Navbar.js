import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Problem sheet generator</div>
      <ul className="navbar-links">
        <li><a href="/problem-generator">Problem Generator</a></li>
        <li><a href="/upload">Upload</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/contact-me">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
