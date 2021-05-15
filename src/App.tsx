import React, { useState, createContext, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import Background from './components/Background/Index';
import Todos from './components/Todos/Index';
import { Dark, Light } from './themes/Themes';
import useLocalStorage from './hooks/useLocalStorage';
import GlobalStyle from './components/GlobalStyle';
import { FadeIn } from './components/Fade/Index';

const ThemeChangerContext = createContext<React.Dispatch<
  React.SetStateAction<'dark' | 'light'>
> | null>(null);

function App() {
  const [storageTheme, setStorageTheme] = useLocalStorage(
    'todo-theme',
    'dark' as 'dark' | 'light'
  );

  const [currentTheme, setCurrentTheme] = useState(
    storageTheme === 'light' ? Light : Dark
  );

  useEffect(() => {
    setCurrentTheme(storageTheme === 'light' ? Light : Dark);
  }, [storageTheme]);
  return (
    <>
      <ThemeProvider theme={currentTheme}>
        <ThemeChangerContext.Provider value={setStorageTheme}>
          <GlobalStyle />
          <Background />
          <FadeIn>
            <Todos />
          </FadeIn>
        </ThemeChangerContext.Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
export { ThemeChangerContext };
