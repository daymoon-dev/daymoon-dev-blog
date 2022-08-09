import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Nav, Footer } from "../components";
import theme from "../styles/theme";
import Posts from "./posts";
import Portfolio from "./portfolio";
import PostDetail from "./postDetail";
import PostInput from "./postInput";
import { GlobalStyle } from "../styles/globalStyles";
import { LandingPage } from "../components/landing";

function Index() {
  return (
    <>
      <ThemeProvider theme={theme.light}>
        <GlobalStyle />
        <Nav />
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
