import React from 'react';

import './ContactMe.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import faMailbox from '@fortawesome/fontawesome-svg-core';

function ContactMe() {
  return (
    <div style={{ fontSize: "100px" }} class="social-links">
    <a href='https://github.com'><FontAwesomeIcon icon={faGithub} /></a>
    <a href="https://linkedin.com"><FontAwesomeIcon icon={faLinkedin} /></a>
    <a href="https://instagram.com"><FontAwesomeIcon icon={faInstagram} /></a>
    <a href="https://twitter.com"><FontAwesomeIcon icon={faTwitter} /></a>
    <a href="mailto:youremail@example.com"><FontAwesomeIcon icon={faMailbox} /></a>
</div>

    
  );
}

export default ContactMe;
