import React from 'react';

import './ContactMe.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function ContactMe() {
  return (
    <div className="icon-container">
        <div className="icon">
            <a href='https://github.com/BenjaminWills' target="_blank"><FontAwesomeIcon icon={faGithub} style={{ color: 'black' }} className="contact-icon"/></a>
        </div>
        <div className="icon">
            <a href="https://www.linkedin.com/in/benjamin-wills-b22887220/" target="_blank"><FontAwesomeIcon icon={faLinkedin} style={{ color: '#0077b5' }} className="contact-icon"/></a>
        </div>
        <div className="icon">
            <a href="https://www.instagram.com/ben_wills123/?hl=en-gb" target="_blank"><FontAwesomeIcon icon={faInstagram} className="contact-icon"/></a>
        </div>
        <div className="icon">
            <a href="https://twitter.com" target="_blank"><FontAwesomeIcon icon={faTwitter} className="contact-icon"/></a>
        </div>
        <div className="icon">
            <a href="mailto:benjaminwills057@gmail.com"><FontAwesomeIcon icon={faEnvelope} className="contact-icon"/></a>
        </div>
    </div>    
  );
}

export default ContactMe;
