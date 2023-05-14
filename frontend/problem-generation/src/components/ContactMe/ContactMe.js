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
    </div>
  );
}

export default ContactMe;
