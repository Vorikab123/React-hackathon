import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import MainPoutes from "./MainPoutes";
import "../src/index.css";
import ProductsContextProvider from "./pages/context/productsContext";
import CartContextProvider from "./pages/context/cartContext";
import AuthContextProvider from "./pages/context/AuthContext";
const App = () => {
  return (
      <BrowserRouter>
    <ProductsContextProvider>
      <AuthContextProvider>
      <CartContextProvider>
        <Navbar />
        <MainPoutes />
        </CartContextProvider>
        </AuthContextProvider>
    </ProductsContextProvider>
      </BrowserRouter>

  );
};

export default App;
