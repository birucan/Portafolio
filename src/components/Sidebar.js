import React from 'react';
import './Styles.css';
import CirclePic from './CirclePic.js';
import{ Link} from 'react-scroll'


class Sidebar extends React.Component {


  constructor(props) {
    super(props);
    this.state = {lang: 0};
  }
/*checkbox false = english, true = spanish*/
  handleChange(event){
    if(this.state.lang==1){
      this.setState({lang: 0})
      this.props.changeLang(0)
    }else{
      this.setState({lang: 1})
      this.props.changeLang(1)
    }
  }


render(){

/*English Version*/
if(this.state.lang===0){
  return (
    <div className="Sidebar">

    <CirclePic></CirclePic>
    <h5>Hi, I'm Tomás Kavanagh, this is the desktop version of this site.</h5>

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
Contact
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

<h3>English||Spanish</h3>
<label class="switch">
<input type="checkbox" value={this.state.lang} onChange={()=>this.handleChange()}></input>
<span class="slider round"></span>
</label>

    </div>



);
}
else{
  /*Spanish Version*/
  return (
    <div className="Sidebar">

    <CirclePic></CirclePic>
    <h5>Hola, Soy Tomás Kavanagh, esta es la versión de escritorio de esta pagina.</h5>

    <Link
           to="intro"
           spy={true}
           smooth={true}
           duration={500}
           className="LinksScroll"
           activeClass="active"
         >
    Introducción
</Link>

<Link
       to="cv"
       spy={true}
       smooth={true}
       duration={500}
       className="LinksScroll"
       activeClass="active"
     >
Hoja de vida
</Link>

<Link
       to="Projects"
       spy={true}
       smooth={true}
       duration={500}
       className="LinksScroll"
       activeClass="active"
     >
Proyectos Actuales
</Link>



<Link
       to="Links"
       spy={true}
       smooth={true}
       duration={500}
       className="LinksScroll"
       activeClass="active"
     >
Contacto
</Link>

<Link
       to="OtherStuff"
       spy={true}
       smooth={true}
       duration={500}
       className="LinksScroll"
       activeClass="active"
     >
Otras Cosas
</Link>

<h3>Ingles||Español</h3>
<label class="switch">
<input type="checkbox" value={this.state.lang} onChange={()=>this.handleChange()}></input>
<span class="slider round"></span>
</label>

    </div>



);
}
}
}

export default Sidebar;
