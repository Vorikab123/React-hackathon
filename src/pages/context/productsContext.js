import axios from "axios";
import React, { createContext, useContext, useEffect, useReducer } from "react";
import { ACTIONS, API } from "../../components/helpers/const";
export const productsContext = createContext();
export const useProducts = () => useContext(productsContext);

const INIT_STATE = {
  products: [],
  oneProduct: {},
};
const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTIONS.GET_PRODUCTS:
      return { ...state, products: action.payload };
    case ACTIONS.GET_ONE_PRODUCT:
      return { ...state, oneProduct: action.payload };
    default:
      return state;
  }
};

const ProductsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function getProducts() {
    try {
      let { data } = await axios.get(API);
      dispatch({
        type: ACTIONS.GET_PRODUCTS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function addProduct(product) {
    try {
      await axios.post(API, product);
      getProducts();
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteOneProduct(id) {
    try {
      await axios.delete(`${API}/${id}`);
      getProducts();
    } catch (error) {
      console.log(error);
    }
  }

  async function getOneProduct(id) {
    try {
      let { data } = await axios.get(`${API}/${id}`);
      dispatch({
        type: ACTIONS.GET_ONE_PRODUCT,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  const values = {
    products: state.products,
    oneProduct: state.oneProduct,
    addProduct,
    deleteOneProduct,
    getOneProduct,
  };
  return (
    <productsContext.Provider value={values}>
      {children}
    </productsContext.Provider>
  );
};

export default ProductsContextProvider;
