import React from "react";
import { Route, Routes } from "react-router-dom";
import EditComponent from "./components/edit/EditProduct";
import AddProduct from "./components/Product/AddProduct";
import ProductDetails from "./components/Product/ProductDetails";
import AboutUsPage from "./pages/AboutUsPage";
import AuthPages from "./pages/AuthPages";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import CartPages from "./pages/CartPages";
import PayPage from "./pages/PayPage";

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
    {
      link: "/cart",
      element: <CartPages/>,
      id: 5,
    },
    {
      link: "/Pay",
      element: <PayPage/>,
      id:6,
    }
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
    {
      link: "products/edit/:id",
      element: <EditComponent />,
      id: 3,
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
