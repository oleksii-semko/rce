import React, { createContext, useState } from "react";

const AppContext = createContext();
const AppContextProvider = ({ children }) => {
  let [state, setState] = useState([]);
  const setAppState = (config) => {
    setState(prevState => ({
      ...prevState,
      config
    }));
  };

  return (
    <AppContext.Provider value={{ state, setAppState }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
