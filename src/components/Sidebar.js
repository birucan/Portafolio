import React from 'react';
import './Styles.css';
function Sidebar() {
  return (
    <div className="Sidebar">
    <h5>Hi, I'm Tomás Kavanagh</h5>
    <a classname="sideLinks" href="home">Home</a>
    <a href="news">News</a>
    <a href="contact">Contact</a>
    <a href="about">About</a>
    </div>
  );
}

export default Sidebar;
