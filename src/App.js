import React from "react";
import Formvalidation from "./Components/Formvalidation";
import FormSigin from "./Components/FormSigin";
import { Route, Routes } from "react-router-dom";

function App() {





  return (
    <div>
      <Routes>
        <Route path="/" element = {<FormSigin/>}></Route>
        <Route path="/sign up" element ={<Formvalidation/>}></Route>
      </Routes>
      


    </div>
  );
}

export default App;
