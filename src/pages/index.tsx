import { Routes, Route } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Navbar from "../components/nav/Navbar";
import { light } from "../styles/theme";
import LandingPage from "../components/landing";
import Footer from "../components/footer/Footer";
import Posts from "./posts";
import Portfolio from "./portfolio";
import PostDetail from "./postDetail";

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

function Index() {
  return (
    <>
      <ThemeProvider theme={light}>
        <GlobalStyle />
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/postdetail" element={<PostDetail />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default Index;
