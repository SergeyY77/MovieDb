import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
 @import url('https://fonts.cdnfonts.com/css/source-sans-pro');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color: #000;
    font-family: "Source Sans Pro", Arial, sans-serif;
  }
`;

export default GlobalStyles;
