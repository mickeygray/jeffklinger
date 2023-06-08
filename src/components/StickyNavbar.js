import React, { useEffect, useState, Fragment, useContext } from "react";
import { useLocation, NavLink } from "react-router-dom";
const StickyNavbar = () => {
 const [style, setStyle] = useState({});

 const position = window.pageYOffset;
 const onClick = () => {
  window.scrollTo(0, 0);
 };
 useEffect(() => {
  window.addEventListener("scroll", onScroll);
  setStyle({
   backgroundColor: "rgb(211,224,237)",
   overflowY: "hidden",

   overflowX: "hidden",
  });
 }, []);

 const location = useLocation();
 useEffect(() => {
  if (position === 0) {
   setStyle({
    backgroundColor: "black",
    zIndex: "999999999999999",
   });
  }
 }, [position, setStyle]);

 const onScroll = () => {
  setStyle({
   overflowY: "hidden",
   overflowX: "hidden",
   backgroundColor: "black",
   position: "sticky",
   top: "0",
   zIndex: "999999999999999",
  });
 };

 return (
  <nav onScroll={onScroll} style={style} className='navbar nav'>
   <a href='/'>
    {" "}
    <h3 className='all-center'>Jeff Klinger Comedy</h3>
   </a>

   <span className='lead' style={{ display: "block", marginTop: "33px" }}>
    <a href='#bio'>Biography</a>
    <a href='#photos'>Photography</a>
    <a href='#credits'>Credits</a>
   </span>
  </nav>
 );
};

export default StickyNavbar;
