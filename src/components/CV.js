import React from 'react';
import './Styles.css';
import './MStyles.css';
import pdf from './assets/pdf.svg'
class CV extends React.Component {
render(){
  if(this.props.lan===0){
    let width = window.innerWidth;
    if (width > 768) {
      return (
    <div className="CV">
    <h1>Resume</h1>
    <cvLink>
    <textCV>if you wish to download my formal resume the link is right here. For the spanish version change the language of the site in the sidebar.</textCV>
    <a  href='https://drive.google.com/open?id=1nXKrcA3f-oEDEPUTCqMgSW-Q5AH79iPI' >
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
    <mtextCV>if you wish to download my formal resume the link is right here. For the spanish version change the language of the site in the sidebar/header.</mtextCV>
    <a  href='https://drive.google.com/open?id=1nXKrcA3f-oEDEPUTCqMgSW-Q5AH79iPI' >
    <img src={pdf}className="pdf"/>
    </a>
    </mcvLink>
    </div>
  );

}

  }else{
    let width = window.innerWidth;
    if (width > 768) {
      return (
    <div className="CV">
    <h1>Hoja de Vida</h1>
    <cvLink>
    <textCV>Para descargar mi hoja de vida usa el vinculo de aca abajo, para la version en ingles cambie el idioma de la pagina.</textCV>
    <a  href='https://drive.google.com/open?id=1byxRfP_hupPyhdhOxTrKzt5f-oBjwFt3' >
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
    <mtextCV>Para descargar mi hoja de vida usa el vinculo de aca abajo, para la version en ingles cambie el idioma de la pagina.</mtextCV>
    <a  href='https://drive.google.com/open?id=1byxRfP_hupPyhdhOxTrKzt5f-oBjwFt3' >
    <img src={pdf}className="pdf"/>
    </a>
    </mcvLink>
    </div>
  );

}

  }
}
}

export default CV;
