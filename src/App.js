import React from 'react';
import { AppContextProvider } from "./components/context/index";
import PageEditor from './components/PageEditor';
import PageDisplay from './components/PageDisplay';

/**
 * Main app component
 */
const App = () => {
  return (
    <div className="App">
      <AppContextProvider>
        <PageEditor />
        <PageDisplay />
      </AppContextProvider>
    </div>

  );
}

export default App;
