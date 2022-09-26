import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import JeffKlinger from "./components/JeffKlinger";
const App = () => {
 return (
  <Router>
   <Routes>
    <Route exact path='/*' element={<JeffKlinger />} />
   </Routes>
  </Router>
 );
};

export default App;
