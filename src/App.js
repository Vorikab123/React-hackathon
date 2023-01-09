import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import MainPoutes from "./MainPoutes";
import "../src/index.css";
import ProductsContextProvider from "./pages/context/productsContext";
import CartContextProvider from "./pages/context/cartContext";
const App = () => {
  return (
    <ProductsContextProvider>
      <BrowserRouter>
      <CartContextProvider>
        <Navbar />
        <MainPoutes />
        </CartContextProvider>
      </BrowserRouter>
    </ProductsContextProvider>
  );
};

export default App;
