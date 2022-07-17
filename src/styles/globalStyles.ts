import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 body{
   background-color: ${({ theme }) => theme.colors.primary};

   font-family: "NanumMyeongjo";
   color: ${({ theme }) => theme.colors.second};
  }

  @font-face {
   font-family: 'NanumMyeongjo';
   src: url('./fonts/nanumMyeongjo/NanumMyeongjo.woff2');
  }

  @font-face {
   font-family: 'Inter';
   src: url('./fonts/inter/Inter-Regular.woff2');
  }

  a {
    text-decoration: none;
  }
`;
