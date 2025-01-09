import MyContext from "./context";
import { useState } from "react";

const MyProvider = ({ children }) => {
  const [language, setLanguage] = useState("");

  const contextValue = {
    language,
    setLanguage,
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};

export default MyProvider;
