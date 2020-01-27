import React from 'react';
import './Styles.css';
import github from './assets/logo.svg'
import email from './assets/java.svg'
function Links() {

  let width = window.innerWidth;
    if (width > 768) {
      return (
        <div className="Projects">
        <h1>Current Projects</h1>
        <h4>I'm showcasing my most recent projects here, I'll constantly update this section</h4>
        <cvLink>
        <h1>Portafolio Site</h1>
        <textCV>This is this site! Made in react and will be updated consistently</textCV>
        <a  href='https://github.com/birucan/Portafolio' >
        <img src={github}className="pdf"/>
        </a>
        </cvLink>

          <space/>

        <cvLink>
        <h1>Javamon</h1>
        <textCV>a very OOP aproach to a pokemon engine built in java, still a WIP</textCV>
        <a  href='https://github.com/birucan/JavaMon' >
        <img src={email}className="pdf"/>
        </a>
        </cvLink>
        </div>
      );
}else{
  return (
    <div className="mProjects">
    <h1>Current Projects</h1>
    <h4>I'm showcasing my most recent projects here, I'll constantly update this section</h4>
    <cvLink>
    <h1>Portafolio Site</h1>
    <textCV>This is this site! Made in react and will be updated consistently</textCV>
    <a  href='https://github.com/birucan/Portafolio' >
    <img src={github}className="pdf"/>
    </a>
    </cvLink>

      <space/>

    <cvLink>
    <h1>Javamon</h1>
    <textCV>a very OOP aproach to a pokemon engine built in java, still a WIP</textCV>
    <a  href='https://github.com/birucan/JavaMon' >
    <img src={email}className="pdf"/>
    </a>
    </cvLink>
    </div>
  );

}



}

export default Links;
