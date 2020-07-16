import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    background: linear-gradient(to right, #12c2e9, #c471ed, #f64f59);
      font-family: 'Noto Sans JP';
      color: #fff;
      height: 100vh;
      overflow: scroll;
      scroll-behavior: smooth;
  }

  img {
      margin: 0;
  }
`

export default GlobalStyle
