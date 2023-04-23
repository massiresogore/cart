import { createContext, useContext } from "react";

const AppContex = createContext();

export const AppProvider = ({ children }) => {
  const greet = "Hello Massire";

  return <AppContex.Provider value={{ greet }}>{children}</AppContex.Provider>;
};

export const useGlobalContext = () => useContext(AppContex);
