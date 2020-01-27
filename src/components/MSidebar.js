import React from 'react';
import './Styles.css';
import './MStyles.css';
import CirclePic from './CirclePic.js';
import{ Link} from 'react-scroll'


function MSidebar() {
  return (
    <div className="mSidebar">

    <CirclePic></CirclePic>


    <h5>Hi, I'm Tomás Kavanagh, this is the mobile version of the site</h5>
    <h6>refresh with diferent resolution for desktop version</h6>

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

export default MSidebar;
