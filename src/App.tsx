import { ThemeProvider } from 'styled-components';
import Background from './components/Background';
import Todos from './components/Todos';
import { DarkTheme, LightTheme } from './themes';
import useLocalStorage from './hooks/useLocalStorage';
import GlobalStyle from './components/GlobalStyle';
import FadeIn from './components/Fade';
import Header from './components/Header';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useLocalStorage('todo-theme', false);

  const currentTheme = isDarkTheme ? DarkTheme : LightTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Background />
      <FadeIn>
        <Todos>
          <Header setIsDarkTheme={setIsDarkTheme} />
        </Todos>
      </FadeIn>
    </ThemeProvider>
  );
}

export default App;
