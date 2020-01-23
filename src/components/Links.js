import React from 'react';
import './Styles.css';
import github from './assets/github.svg'
import email from './assets/email.svg'
function Links() {
  return (
    <div className="Links">
    <h1>Links</h1>
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
}

export default Links;
