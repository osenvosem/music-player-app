import { injectGlobal } from "styled-components";

injectGlobal`
  * {
    box-sizing: border-box;
  }

  body, html {
    margin:0;
    height: 100%;
  }

  #root {
    height: 100%;
    padding-top: 40px;
    background: linear-gradient(to right bottom, #E1F5FE, #EDE7F6);
    font-family: "Open Sans", sans-serif;
  }
`;
