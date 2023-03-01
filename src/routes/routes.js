import React from "react";
import { Routes, Route} from "react-router-dom";
import About from "../pages/about";
import CONTACT from "../pages/CONTACT/CONTACT";
import Home from "../pages/home";


const Router = () => {
  return (
    <Routes>
       <Route path="/contact" element={<CONTACT/>} />
       <Route path="/" element={<Home/>} />
       <Route path="/about" element={<About/>} />
    </Routes>
  );
};

export default Router;
