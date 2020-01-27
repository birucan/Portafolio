import React from 'react';
import './Styles.css';
import soundcloud from './assets/soundcloud.svg'

function OtherStuff() {


  let width = window.innerWidth;
    if (width > 768) {
      return (
        <div className="OtherStuff">
        <h1>Other Stuff</h1>
        <cvLink>
        <h1>SoundCloud</h1>
        <textCV>This is my SoundCloud page, don't upload very often, but it exists.</textCV>
        <a  href='http://www.soundcloud.com/birucan' >
        <img src={soundcloud}className="pdf"/>
        </a>
        </cvLink>
        </div>
  );
}else{
  return (
    <div className="mOtherStuff">
    <h1>Other Stuff</h1>
    <mcvLink>
    <h1>SoundCloud</h1>
    <mtextCV>This is my SoundCloud page, don't upload very often, but it exists.</mtextCV>
    <a  href='http://www.soundcloud.com/birucan' >
    <img src={soundcloud}className="pdf"/>
    </a>
    </mcvLink>
    </div>
  );

}




}

export default OtherStuff;
