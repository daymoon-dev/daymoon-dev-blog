import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 body{
   background-color: ${({ theme }) => theme.colors.primary};

   font-family: -apple-system, BlinkMacSystemFont, 'Pretendard', sans-serif, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue';
   color: ${({ theme }) => theme.colors.second};
  }

  @font-face {
   font-family: "NanumMyeongjo";
   src: url('./fonts/nanumMyeongjo/NanumMyeongjo.woff2') format('woff2');
  }

  /* @font-face {
   font-family: "Inter";
   src: url('./fonts/inter/Inter-Regular.woff2') format('woff2');
  } */

  @font-face {
    font-family: "Pretendard";
    src: url('./fonts/pretendard/Pretendard-Regular.woff2') format('woff2');
  }

  a {
    text-decoration: none;
  }
`;
