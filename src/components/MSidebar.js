import React from 'react';
import './Styles.css';
import './MStyles.css';
import CirclePic from './CirclePic.js';
import{ Link} from 'react-scroll'


class MSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {lang: this.props.lan};
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

      if(this.state.lang===0){
        return (
  <div className="mSidebar">

  <CirclePic></CirclePic>


  <h5>Hi, I'm Tomás Kavanagh, this is the mobile version of the site.</h5>


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
Projects
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
      }else{
        return (
  <div className="mSidebar">

  <CirclePic></CirclePic>


  <h5>Hola soy Tomás Kavanagh, esta es la versión movil de esta pagina.</h5>


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
Hoja de Vida
</Link>

<Link
     to="Projects"
     spy={true}
     smooth={true}
     duration={500}
     className="LinksScroll"
     activeClass="active"
   >
Proyectos
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

export default MSidebar;
