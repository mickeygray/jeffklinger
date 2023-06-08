import React from "react";
import jkhero from "../images/jkhero.png";
const Hero = () => {
 return (
  <div className='all-center'>
   <img
    style={{ height: "80vh", width: "80vh" }}
    src={jkhero}
    alt='Jeff Klinger Comedy'
   />
  </div>
 );
};

export default Hero;
