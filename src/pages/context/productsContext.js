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

// ! создаем обьект
const INIT_STATE = {
  products: [],
  oneProduct: {},
};

// ! создаем  функцию reducer
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

  // ! создание reducer
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  // ! обращаемся ко всем продуктам
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

  // ! Добавление продукта
  async function addProduct(product) {
    try {
      await axios.post(API, product);
      // ! вызываем функцию getProducts(), чтобы без обновление на сайте отображались изменения
      getProducts();
    } catch (error) {
      console.log(error);
    }
  }

  // ! удаление продукта
  async function deleteOneProduct(id) {
    try {
      // ! обращаемся по айдишке к определенному продукту, и через axios.delete() удаляем данный продукт
      await axios.delete(`${API}/${id}`);
      // ! вызываем функцию getProducts(), чтобы без обновление на сайте удалился продукт
      getProducts();
    } catch (error) {
      console.log(error);
    }
  }
  // ? edit
  // ! достаем определенный продукт через айдишку данного продукта
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

  // ! изменение определенного продукта по айдишке, другими словами,
  //! через айдишку обращаемся продукту и изменяем егo на новый
  async function editProductSave(id, editedObj) {
    try {
      // ! axios есть метод path - измение продукта, он принимает в себе апишку и измененный продукт
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
  // !  вызываем хук useEffect(), чтобы когда вызывался функция getProducts() все изменения, удаления сразу отображались без обновление страницы
  useEffect(() => {
    getProducts();
  }, []);

  // ! передаем все функции как пропсы, чтобы достать их в других компонентах через useContext()
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
