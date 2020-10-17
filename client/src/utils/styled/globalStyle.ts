import { createGlobalStyle } from 'styled-components';
import {BASICCOLORS} from "../constant/color";
export const GlobalStyle = createGlobalStyle`
  html {
    font-family: 'Lato', 'Lucida Grande', 'Lucida Sans Unicode', Tahoma, Sans-Serif;
    line-height: 1.5;
    font-size: 15px;
    color: ${BASICCOLORS.BASIC};
    font-weight: 400; 
  }
  body {
    padding: 0;
    margin: 0; 
  }
  h2{
    padding: 0;
    margin: 0; 
  }
  ul {
    padding: 0;
    margin: 0; 
  }
  iframe {
    padding: 0;
    margin: 0; 
  }
  li {
    list-style-type: none;
  }
  a {
    text-decoration: none;
    color: ${BASICCOLORS.WHITELIGHT};
  }
  textarea{
    min-height: 150px;
  }
  a:visited {
    color: none;
  }
`;