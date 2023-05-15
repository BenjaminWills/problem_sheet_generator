import React from 'react';

import './ContactMe.css';
import PDFViewer from './CVDisplayer/CVDisplayer';

function ContactMe() {
  const pdfURL = './CV/ben_wills_cv_data_science.pdf'
  return (
    <div>
      <div>
        <h1>Here's how you can contact me:</h1>
        <p>
          My name is Ben Wills. I'm a lowly Data Engineer by trade, but thought I would work on some
          frontend for a change. Here's how you can contact me.
        </p>
      </div>
      <PDFViewer/>
    </div>
  );
}

export default ContactMe;
