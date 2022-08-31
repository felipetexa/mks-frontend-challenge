import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  /* @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;600;700&display=swap'); */

  * {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: #E5E5E5;
    font-family: 'Montserrat', Sans-Serif;
  }
`;
 
export default GlobalStyle;