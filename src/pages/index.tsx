import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Navbar from "../components/nav/Navbar";
import { light } from "../styles/theme";
import LandingPage from "../components/landing";
import Footer from "../components/footer/Footer";
import Posts from "./posts";
import Portfolio from "./portfolio";
import PostDetail from "./postDetail";
import PostInput from "./postInput";
import { GlobalStyle } from "../styles/globalStyles";

function Index() {
  return (
    <>
      <ThemeProvider theme={light}>
        <GlobalStyle />
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:id" element={<PostDetail />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/postinput" element={<PostInput />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default Index;
