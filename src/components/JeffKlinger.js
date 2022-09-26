import React from "react";
import StickyNavbar from "./StickyNavbar";
import Hero from "./Hero";
import Main from "./Main";
import Footer from "./Footer";
const JeffKlinger = () => {
 return (
  <>
   <StickyNavbar />
   <Hero />
   <div className='container'>
    <Main />
   </div>
   <Footer />
  </>
 );
};

export default JeffKlinger;
