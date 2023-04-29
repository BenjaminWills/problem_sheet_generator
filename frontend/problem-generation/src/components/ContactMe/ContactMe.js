import React from 'react';

import './ContactMe.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function ContactMe() {
  return (
    <div className="icon-container">
        <div className="icon">
            <a href='https://github.com/BenjaminWills'><FontAwesomeIcon icon={faGithub} /></a>
        </div>
        <div className="icon">
            <a href="https://www.linkedin.com/in/benjamin-wills-b22887220/"><FontAwesomeIcon icon={faLinkedin} /></a>
        </div>
        <div className="icon">
            <a href="https://www.instagram.com/ben_wills123/?hl=en-gb"><FontAwesomeIcon icon={faInstagram} /></a>
        </div>
        <div className="icon">
            <a href="https://twitter.com"><FontAwesomeIcon icon={faTwitter} /></a>
        </div>
        <div className="icon">
            <a href="mailto:benjaminwills057@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
        </div>
    </div>    
  );
}

export default ContactMe;
