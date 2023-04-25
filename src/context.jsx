import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "./reducer";
import cartItems from "./data";
import {
  INCREASE,
  DECREASE,
  REMOVE,
  CLEAR_CART,
  LOADING,
  DISPLAY_ITEMS,
} from "./action";
import { getTotal } from "./utils";

const AppContex = createContext();

const initialState = {
  loading: false,
  cart: new Map(cartItems.map((item) => [item.id, item])),
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { totalAmount, totalCost } = getTotal(state.cart);

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };
  const removeCart = (id) => {
    dispatch({ type: REMOVE, payload: { id } });
  };

  const increaseC = (id) => {
    dispatch({ type: INCREASE, payload: { id } });
  };
  const decreaseC = (id) => {
    dispatch({ type: DECREASE, payload: { id } });
  };

  const fetchData = async () => {
    dispatch({ type: LOADING });
    const response = await fetch(
      "https://www.course-api.com/react-useReducer-cart-project"
    );
    const cart = await response.json();

    dispatch({ type: DISPLAY_ITEMS, payload: { cart } });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContex.Provider
      value={{
        ...state,
        clearCart,
        removeCart,
        increaseC,
        decreaseC,
        totalAmount,
        totalCost,
      }}
    >
      {children}
    </AppContex.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContex);
