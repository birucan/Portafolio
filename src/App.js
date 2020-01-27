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

function App() {
        let width = window.innerWidth;
        if (width > 768) {
          return (
            <div className="App">

              <Sidebar></Sidebar>
        <Element id='intro' name='intro'>
              <Intro></Intro>
        </Element>

        <Element id='cv' name='cv'>
              <CV/>
        </Element>

        <Element id='Links' name='Links'>
              <Links/>
        </Element>

        <Element id='Projects' name='Projects'>
              <Projects/>
        </Element>

        <Element id='OtherStuff' name='OtherStuff'>
              <OtherStuff/>
        </Element>

            </div>

          );
        } else {
          return (
            <div className="App">

        <MSidebar></MSidebar>
        <Element id='intro' name='intro'>
              <Intro></Intro>
        </Element>

        <Element id='cv' name='cv'>
              <CV/>
        </Element>

        <Element id='Projects' name='Projects'>
              <Projects/>
        </Element>

        <Element id='Links' name='Links'>
              <Links/>
        </Element>

        <Element id='OtherStuff' name='OtherStuff'>
              <OtherStuff/>
        </Element>

            </div>




          );
        }
}

export default App;
