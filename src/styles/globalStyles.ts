import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 body{
   background-color: ${({ theme }) => theme.colors.primary};

   font-family: -apple-system, BlinkMacSystemFont, 'Pretendard', sans-serif, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue';
   color: ${({ theme }) => theme.colors.second};
  }

  @font-face {
   font-family: "NanumMyeongjo";
   font-weight: 400;
   display: swap;
   src: url('./fonts/nanumMyeongjo/NanumMyeongjo.woff') format('woff') url('./fonts/nanumMyeongjo/NanumMyeongjo.woff2') format('woff2');
  }

  @font-face {
    font-family: "Pretendard";
    font-weight: 400;
    font-display: swap;
    src: url('./fonts/pretendard/Pretendard-Regular.woff') format('woff') url('./fonts/pretendard/Pretendard-Regular.woff2') format('woff2');
  }

  @font-face {
    font-family: "Pretendard";
    font-weight: 700;
    font-display: swap;
    src: url('./fonts/pretendard/Pretendard-Bold.woff') format('woff') url('./fonts/pretendard/Pretendard-Bold.woff2') format('woff2');
  }
  
  a {
    text-decoration: none;
  }
`;
