import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
 html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
  }


  h2, p  {
    margin: 0
  }
  h2, p, a {
    letter-spacing: .3px;
  }

  ul {
    margin: 0;
    padding: 0;
  }
`;

const theme = {
  //Fonts
  main: "Inter",

  // Fonts Size
  size_L: "24px",
  size_M: "16px",
  size_S: "14px",

  // Fonts Weight
  bold: 700,
  medium: 500,
  ligh: 300,

  // Colors:
  red: "#9E1C1C",
};

export { GlobalStyles, theme };
