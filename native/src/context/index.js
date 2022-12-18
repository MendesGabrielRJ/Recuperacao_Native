import { useState, createContext } from "react";

export const IdContext = createContext();

export const IdProvider = ({ children }) => {
  const [id, setId] = useState();

  return (
    <IdContext.Provider value={{ id, setId }}>{children}</IdContext.Provider>
  );
};
