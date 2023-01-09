import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import MainPoutes from "./MainPoutes";
import "../src/index.css";
import ProductsContextProvider from "./pages/context/productsContext";
const App = () => {
  return (
    <ProductsContextProvider>
      <BrowserRouter>
        <Navbar />
        <MainPoutes />
      </BrowserRouter>
    </ProductsContextProvider>
  );
};

export default App;
