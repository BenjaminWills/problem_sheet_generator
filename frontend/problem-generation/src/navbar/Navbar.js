import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Problem sheet generator</div>
      <ul className="navbar-links">
        <li><a href="http://google.co.uk">Home</a></li>
        <li><a href="http://google.co.uk">About</a></li>
        <li><a href="http://google.co.uk">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
