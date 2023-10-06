import { createContext, useContext, useState } from "react";

const textContext = createContext();

export const TextProvider = ({ children }) => {
  const [text, setText] = useState("");

  const toggleText = (value) => {
    setText(value);
  };

  return (
    <textContext.Provider value={{ text, toggleText }}>
      {children}
    </textContext.Provider>
  );
};
export const useText = () => {
  return useContext(textContext);
};
