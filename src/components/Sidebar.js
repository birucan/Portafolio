import React from 'react';
import './Styles.css';
import CirclePic from './CirclePic.js';
import{ Link} from 'react-scroll'


function Sidebar() {
  return (
    <div className="Sidebar">

    <CirclePic></CirclePic>
    <h5>Hi, I'm Tomás Kavanagh</h5>
    <h6>refresh with diferent resolution for mobile version version</h6>
    <Link
           to="intro"
           spy={true}
           smooth={true}
           duration={500}
           className="LinksScroll"
           activeClass="active"
         >
    Intro
</Link>

<Link
       to="cv"
       spy={true}
       smooth={true}
       duration={500}
       className="LinksScroll"
       activeClass="active"
     >
Resume
</Link>

<Link
       to="Projects"
       spy={true}
       smooth={true}
       duration={500}
       className="LinksScroll"
       activeClass="active"
     >
Current Projects
</Link>



<Link
       to="Links"
       spy={true}
       smooth={true}
       duration={500}
       className="LinksScroll"
       activeClass="active"
     >
Links
</Link>

<Link
       to="OtherStuff"
       spy={true}
       smooth={true}
       duration={500}
       className="LinksScroll"
       activeClass="active"
     >
Other Stuff
</Link>


    </div>
  );
}

export default Sidebar;
