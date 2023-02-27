import React from "react";
import { Routes, Route} from "react-router-dom";
import CONTACT from "../pages/CONTACT/CONTACT";


const Router = () => {
  return (
    <Routes>
       <Route path="/contact" element={<CONTACT/>} />
    </Routes>
  );
};

export default Router;
