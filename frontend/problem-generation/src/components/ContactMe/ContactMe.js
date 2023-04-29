import React from 'react';

import './ContactMe.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub, faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function ContactMe() {
  return (
    <div>
      <div>
        <h1>Here's how you can contact me:</h1>
        <p>
          My name is Ben Wills. I'm a lowly Data Engineer by trade, but thought I would work on some
          frontend for a change. Here's how you can contact me.
        </p>
      </div>
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
  );
}

export default ContactMe;
