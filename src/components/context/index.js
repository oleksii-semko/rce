import React, { createContext, useState } from "react";
const initialState = [
  {
    "type": "hero",
    "imageURI": "https://images.unsplash.com/photo-1579963333765-b4129b3250fc"
  },
  {
    "type": "image-text",
    "imageURI": "https://images.unsplash.com/photo-1579963333765-b4129b3250fc",
    "text": "Sunset from the sky......",
    "title": "Airplane",
    "leftToRight": false
  },
  {
    "type": "image-text",
    "imageURI": "https://images.unsplash.com/photo-1579963333765-b4129b3250fc",
    "text": "Sunset from the sky......",
    "title": "Airplane",
    "leftToRight": true
  },
  {
    "type": "data",
    "url": "https://api.publicapis.org/entries",
  }
];
const AppContext = createContext();
const AppContextProvider = ({ children }) => {
  let [state, setState] = useState(initialState);
  const setAppState = (config) => {
    setState(prevState => ([
      ...prevState,
      ...config
    ]));
  };

  return (
    <AppContext.Provider value={{ state, setAppState }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
