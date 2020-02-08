import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar.js';
import Intro from './components/Intro.js';
import CV from './components/CV.js';
import Links from './components/Links.js';
import Projects from './components/Projects.js';
import OtherStuff from './components/OtherStuff.js';
import MSidebar from './components/MSidebar.js';
import { Element } from 'react-scroll'
import ReactGA from 'react-ga';



ReactGA.initialize('UA-157702478-1');



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {wdt: window.innerWidth,
    lan:0};
  }

  componentDidMount() {
    ReactGA.initialize('UA-157702478-1');
    this.interval = setInterval(() => this.setState({ wdt: window.innerWidth }), 100);
  }


  componentWillUnmount() {
  clearInterval(this.interval);
}

  lanHandle(num){
    this.setState({lan: num})
  }

  render(){
    let width = this.state.wdt;
    if (width > 768) {
      return (
        <div className="App">

          <Sidebar  changeLang={this.lanHandle.bind(this)}></Sidebar>
    <Element id='intro' name='intro'>
          <Intro lan={this.state.lan}/>
    </Element>

    <Element id='cv' name='cv'>
          <CV lan={this.state.lan}/>
    </Element>

    <Element id='Links' name='Links'>
          <Links lan={this.state.lan}/>
    </Element>

    <Element id='Projects' name='Projects'>
          <Projects lan={this.state.lan} />
    </Element>

    <Element id='OtherStuff' name='OtherStuff'>
          <OtherStuff lan={this.state.lan}/>
    </Element>

        </div>

      );
    } else {
      return (
        <div className="App">

    <MSidebar changeLang={this.lanHandle.bind(this)} lan={this.state.lan}></MSidebar>
    <Element id='intro' name='intro'>
          <Intro lan={this.state.lan}></Intro>
    </Element>

    <Element id='cv' name='cv'>
          <CV lan={this.state.lan}/>
    </Element>

    <Element id='Projects' name='Projects'>
          <Projects lan={this.state.lan}/>
    </Element>

    <Element id='Links' name='Links'>
          <Links lan={this.state.lan}/>
    </Element>

    <Element id='OtherStuff' name='OtherStuff'>
          <OtherStuff lan={this.state.lan}/>
    </Element>

        </div>




      );
    }
  }

}

export default App;
