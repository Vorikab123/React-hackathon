import axios from "axios";
import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
  const location = useLocation();

  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

  async function editProductSave(id, editedObj) {
    try {
      await axios.patch(`${API}/${id}`, editedObj);
      getProducts();
    } catch (error) {
      console.log(error);
    }
  }
  const getProduct = async () => {
    try {
      let { data } = await axios(`${API}${window.location.search}`);
      let action = {
        type: ACTIONS.GET_PRODUCTS,
        payload: data,
      };
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchByParams = async (quary, value) => {
    const seacrh = new URLSearchParams(location.search);

    if (value == "all") {
      seacrh.delete(quary);
    } else {
      seacrh.set(quary, value);
    }

    const url = `${location.pathname}?${seacrh.toString()}`;

    navigate(url);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const values = {
    products: state.products,
    oneProduct: state.oneProduct,
    addProduct,
    deleteOneProduct,
    getOneProduct,
    open,
    handleOpen,
    handleClose,
    editProductSave,
    fetchByParams,
    getProduct,
  };
  return (
    <productsContext.Provider value={values}>
      {children}
    </productsContext.Provider>
  );
};

export default ProductsContextProvider;
