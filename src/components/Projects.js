import React from 'react';
import './Styles.css';
import github from './assets/github.svg'
import email from './assets/email.svg'
function Links() {

  let width = window.innerWidth;
    if (width > 768) {
      return (
        <div className="Projects">
        <h1>Current Projects</h1>
        <cvLink>
        <h1>Github</h1>
        <textCV>This is my github profile, you can check out my proyects in here, more to come soon.</textCV>
        <a  href='http://www.github.com/birucan' >
        <img src={github}className="pdf"/>
        </a>
        </cvLink>

          <space/>

        <cvLink>
        <h1>Email</h1>
        <textCV>If you need to contact me, you can email me at <b>t.kavanagh@uniandes.edu.co</b></textCV>
        <a  href='mailto:t.kavanagh@uniandes.edu.co' >
        <img src={email}className="pdf"/>
        </a>
        </cvLink>
        </div>
      );
}else{
  return (
    <div className="mLinks">
    <h1>Links</h1>
    <mcvLink>
    <h1>Github</h1>
    <mtextCV>This is my github profile, you can check out my proyects in here, more to come soon.</mtextCV>
    <a  href='http://www.github.com/birucan' >
    <img src={github}className="pdf"/>
    </a>
    </mcvLink>

      <space/>

    <mcvLink>
    <h1>Email</h1>
    <mtextCV>If you need to contact me, you can email me at <b>t.kavanagh@uniandes.edu.co</b></mtextCV>
    <a  href='mailto:t.kavanagh@uniandes.edu.co' >
    <img src={email}className="pdf"/>
    </a>
    </mcvLink>
    </div>
  );

}



}

export default Links;
