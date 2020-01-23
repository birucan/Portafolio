import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar.js';
import Intro from './components/Intro.js';
import CV from './components/CV.js';
import Links from './components/Links.js';
import OtherStuff from './components/OtherStuff.js';

import { Element } from 'react-scroll'

function App() {
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

<Element id='OtherStuff' name='OtherStuff'>
      <OtherStuff/>
</Element>

    </div>

  );
}

export default App;
