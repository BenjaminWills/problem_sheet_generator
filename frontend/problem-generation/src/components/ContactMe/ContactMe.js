import React from 'react';

import './ContactMe.css';
import PDFViewer from './CVDisplayer/CVDisplayer';

function ContactMe() {
  const pdfURL = './CV/ben_wills_cv_data_science.pdf'
  return (
    <div>
      <div>
        <h1><center>About me</center></h1>
        <p>
          My name is Ben Wills. I'm a lowly Data Engineer by trade, I'm passionate about mathematics and the
          spreading of all of the interesting things that you can do with it. In this website I wish to display
          how interesting the applications can be.
        </p>
        <h2><center>CV</center></h2>
      </div>
      <PDFViewer/>
    </div>
  );
}

export default ContactMe;
