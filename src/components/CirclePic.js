import React from 'react';
import './Styles.css';
import pic from "./assets/tempPP.jpg";
function CirclePic() {
  return (
    //todo: change pic
    <div className="CirclePic">
        <img src={pic} className="cPP" alt="cPP"/>
    </div>
  );
}

export default CirclePic;
