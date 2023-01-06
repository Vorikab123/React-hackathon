import React, { createContext, useContext } from "react";
export const productsContext = createContext();
export const useProducts = () => useContext(productsContext);

const ProductsContextProvider = ({ children }) => {
  const values = {};
  return (
    <productsContext.Provider value={values}>
      {children}
    </productsContext.Provider>
  );
};

export default productsContext;
