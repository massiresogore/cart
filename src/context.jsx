import { createContext, useContext, useReducer } from "react";
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

const AppContex = createContext();

const initialState = {
  loading: false,
  cart: new Map(cartItems.map((item) => [item.id, item])),
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };
  const removeCart = (id) => {
    dispatch({ type: REMOVE, payload: { id } });
  };

  return (
    <AppContex.Provider value={{ ...state, clearCart, removeCart }}>
      {children}
    </AppContex.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContex);
