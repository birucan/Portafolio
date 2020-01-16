import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar.js';
import MainPage from './components/MainPage.js';


function App() {
  return (
    <div className="App">

      <Sidebar></Sidebar>
      <MainPage></MainPage>
    </div>

  );
}

export default App;
