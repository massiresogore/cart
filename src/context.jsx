import { createContext, useContext, useReducer } from "react";
import { reducer } from "./reducer";
import {
  INCREASE,
  DECREASE,
  REMOVE,
  CLEAR_ITEMS,
  LOADING,
  DISPLAY_ITEMS,
} from "./action";

const AppContex = createContext();

const initialState = {
  loading: false,
  cart: [],
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContex.Provider value={{ ...state }}>{children}</AppContex.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContex);
