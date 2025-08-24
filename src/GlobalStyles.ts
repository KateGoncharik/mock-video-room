import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Segoe UI', Roboto, Arial, sans-serif;
    background-color: #adcdde94;
    color: #000000;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

`;

export default GlobalStyle;
