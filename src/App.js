import React from 'react';
import { AppContextProvider } from "./components/context/index";
import PageEditor from './components/PageEditor';

/**
 * Main app component
 */
const App = () => {
  return (
    <AppContextProvider>
      <PageEditor />
    </AppContextProvider>
  );
}

export default App;
