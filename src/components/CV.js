import React from 'react';
import './Styles.css';
import pdf from './assets/pdf.svg'
function CV() {
  return (
    <div className="CV">
    <h1>Resume</h1>
    <cvLink>
    <textCV>if you wish to download my formal resume the link is right here.</textCV>
    <a  href='https://drive.google.com/open?id=1v06Ln16Xzdy1RkPLylydTnvbFo-Dur7Q' >
    <img src={pdf}className="pdf"/>
    </a>
    </cvLink>
    </div>
  );
}

export default CV;
