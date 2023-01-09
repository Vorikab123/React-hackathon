import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutUsPage from "./pages/AboutUsPage";
import AuthPages from "./pages/AuthPages";
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
    {
      link: "/auth",
      element: <AuthPages/>,
      id:4,
    },
  ];
  return (
    <Routes>
      {PUBLIC_PAGES.map((page) => (
        <Route path={page.link} element={page.element} key={page.id} />
      ))}
    </Routes>
  );
};

export default MainPoutes;
