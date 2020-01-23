import React from 'react';
import './Styles.css';
import CirclePic from './CirclePic.js';
import Scroll from 'react-scroll'
const ScrollLink = Scroll.ScrollLink


function Sidebar() {
  return (
    <div className="Sidebar">

    <CirclePic></CirclePic>
    <h5>Hi, I'm Tomás Kavanagh</h5>
    <ScrollLink
           to="intro"
           spy={true}
           smooth={true}
           duration={500}
           className='App'
          activeClass='some-active-class'
         >
         Intro
</ScrollLink>
    <a href="#CV">CV</a>

    <a href="#Links">Links</a>

    <a href="#OtherStuff">Other Stuff</a>


    </div>
  );
}

export default Sidebar;
