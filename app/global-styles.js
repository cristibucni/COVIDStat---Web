import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    font-family: 'Roboto', sans-serif;
    font-family: 'Rubik', sans-serif;
    height: 100%;
    width: 100%;
    margin:0;
    padding: 0;
  }

  #app {
    background-color: #fff;
    min-height: 100%;
    min-width: 100%;
    background-size:cover;
    background-repeat: no-repeat;
    background: rgba(239, 239, 239, 0.3);
    display:flex;
    flex-direction:column;
  }

  p,
  label {
    font-family: 'Roboto', sans-serif;
    font-family: 'Rubik', sans-serif;
    line-height: 1.5em;
  }
`;

export default GlobalStyle;
