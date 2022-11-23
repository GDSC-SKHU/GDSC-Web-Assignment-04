import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
   
    font-family: NanumPen;
  }

  @font-face {
    font-family: NanumPen;
    src: url(https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&family=Noto+Sans+KR:wght@100;300;400&display=swap);
  }
`;

export default GlobalStyle;
