import React from 'react';
import './Styles.css';
import './MStyles.css';
import pic from "./assets/tempPP.jpg";
function CirclePic() {

  let width = window.innerWidth;
  if (width > 768) {
    return (
      <div className="CirclePic">
          <img src={pic} className="cPP" alt="cPP"/>
      </div>
);
}else{

return (
  <div className="CirclePic">
      <img src={pic} className="mcPP" alt="cPP"/>
  </div>
);
}
}

export default CirclePic;
