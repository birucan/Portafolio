import React from 'react';
import './Styles.css';
import './MStyles.css';
import pdf from './assets/pdf.svg'
function CV() {
    let width = window.innerWidth;
    if (width > 768) {
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
else{
  return(
    <div className="mCV">
    <h1>Resume</h1>
    <mcvLink>
    <mtextCV>if you wish to download my formal resume the link is right here.</mtextCV>
    <a  href='https://drive.google.com/open?id=1v06Ln16Xzdy1RkPLylydTnvbFo-Dur7Q' >
    <img src={pdf}className="pdf"/>
    </a>
    </mcvLink>
    </div>
  );

}

}

export default CV;
