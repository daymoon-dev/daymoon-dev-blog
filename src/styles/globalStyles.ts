import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 body{
   background-color: ${({ theme }) => theme.colors.primary};

   font-family: "NanumMyeongjo";
   color: ${({ theme }) => theme.colors.second};
  }

  @font-face {
   font-family: 'NanumMyeongjo';
   src: url('https://fonts.googleapis.com/css2?family=Nanum+Myeongjo&display=swap');
  }

  @font-face {
   font-family: 'Inter';
   src: url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
  }

  a {
    text-decoration: none;
  }
`;
