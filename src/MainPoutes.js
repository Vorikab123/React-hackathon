import React from "react";
import { Route, Routes } from "react-router-dom";
import AddProduct from "./components/Product/AddProduct";
import ProductDetails from "./components/Product/ProductDetails";
import AboutUsPage from "./pages/AboutUsPage";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";

const MainPoutes = () => {
  const PUBLIC_PAGES = [
    {
      link: "/",
      element: <HomePage />,
      id: 1,
    },
    {
      link: "/about-us",
      element: <AboutUsPage />,
      id: 2,
    },
    {
      link: "/products",
      element: <ProductsPage />,
      id: 3,
    },
  ];
  const PRIVATE_PAGES = [
    {
      link: "/add-product",
      element: <AddProduct />,
      id: 1,
    },
    {
      link: "edit/:id",
      element: <ProductDetails />,
      id: 2,
    },
  ];
  return (
    <Routes>
      {PUBLIC_PAGES.map((page) => (
        <Route path={page.link} element={page.element} key={page.id} />
      ))}
      {PRIVATE_PAGES.map((page) => (
        <Route path={page.link} element={page.element} key={page.id} />
      ))}
    </Routes>
  );
};

export default MainPoutes;
