import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import MainPoutes from "./MainPoutes";
import "../src/index.css";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <MainPoutes />
    </BrowserRouter>
  );
};

export default App;
