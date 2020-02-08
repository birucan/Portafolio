import React from 'react';
import './Styles.css';

class Intro extends React.Component {
render(){
  let width = window.innerWidth;

    if(this.props.lan===0){
      if (width > 768) {
        return (

      <div className="Intro">

        <div>
          <h1>Hello!</h1>
          <h3>I'm Tomás Kavanagh, a Venezuelan/American University student mayoring in Computing and Systems Engeniering at Universidad de Los Andes. This site was built in react with little to no libraries, it's purpose, mainly is to host my resume and hopefully some other stuff in the near future.</h3>
        </div>

      </div>

    );
  }else{
    return (
    <div className="mIntro">

    <div>
      <h1>Hello!</h1>
      <h3>I'm Tomás Kavanagh, a Venezuelan/American University student mayoring in Computing and Systems Engeniering at Universidad de Los Andes. This site was built in react with little to no libraries, it's purpose, mainly is to host my resume and hopefully some other stuff in the near future.</h3>
    </div>

    </div>
    );
  }
}else{
  if (width > 768) {
    return (

  <div className="Intro">

    <div>

      <h1>¡Hola!</h1>
      <h3>Soy Tomás Kavanagh, soy un estudiante de universidad, estudio Ingenieria de sitemas y computación en la universidad de los andes. Hice esta pagina con react con una sola libreria externa, el proposito de esta pagina es principalmente hospedar mi hoja de vida, tendra otras cosas en el futuro cercano.</h3>
    </div>

  </div>

);
}else{
return (
<div className="mIntro">

<div>
  <h1>¡Hola!</h1>
  <h3>Soy Tomás Kavanagh, soy un estudiante de universidad, estudio Ingenieria de sitemas y computación en la universidad de los andes. Hice esta pagina con react con una sola libreria externa, el proposito de esta pagina es principalmente hospedar mi hoja de vida, tendra otras cosas en el futuro cercano.</h3>
</div>

</div>
);
}

}


}
}

export default Intro;
