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
    /* position: relative; */
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
  }


  h2, h3, p  {
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
  main: "Inter, sans-serif",
  alternateFont: "Roboto, sans-serif",

  // Fonts Size
  size_L: "24px",
  size_M: "16px",
  size_S: "14px",

  // Fonts Weight
  bold: 700,
  medium: 500,
  light: 300,

  // Colors:
  white: "#fff",
  light_grey: "#f1f1f1",
  grey: "#c7c7c7",
  heavy_grey: "#8a8a8a",
  dark: "#000",
  red: "#9E1C1C",
  dark_red: "#761616",

  // Ranges
  container_size: "1280px",
};

export { GlobalStyles, theme };
