import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
    height: 100%;
  }
  
  body {
    min-height: 100%;
    font-family: 'Josefin Sans', sans-serif;
  }
  
  #root {
    min-height: 100vh;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  `;

export default GlobalStyle;
