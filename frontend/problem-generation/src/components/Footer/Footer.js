import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub, faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <span className="text-muted">© 2023 problem sheet website. My socials are on the right.</span>
        <div className="icon-container">
          <div className="icon">
            <a href="https://github.com/BenjaminWills" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} style={{ color: 'black' }} className="contact-icon" /></a>
          </div>
          <div className="icon">
            <a href="https://www.linkedin.com/in/benjamin-wills-b22887220/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} style={{ color: '#0077b5' }} className="contact-icon" /></a>
          </div>
          <div className="icon">
            <a href="mailto:benjaminwills057@gmail.com"><FontAwesomeIcon icon={faEnvelope} style={{ color: 'black' }} className="contact-icon" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
