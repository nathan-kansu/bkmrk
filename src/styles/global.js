import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    background: linear-gradient(rgb(32, 47, 60) 0%, rgb(64, 94, 120) 33%, rgb(64, 94, 120) 66%, rgb(32, 47, 60) 100%) no-repeat;
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
