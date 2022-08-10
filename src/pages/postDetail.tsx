import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { PageTemplate } from "../components/common";
import { Main } from "../components";
import { Half } from "../components/landing/styles/halfContainer.style";
import { Link, useParams } from "react-router-dom";
import { fetchAddr } from "../data/metaData";
import theme from "../styles/theme";

export const PostTitle = styled(Half)`
  justify-content: center;
  text-align: right;
  line-height: 5em;
  padding-left: 3em;
  flex-direction: column;

  p {
    margin: 0;
    height: 0;
  }

  ${theme.mediaQuery.tablet`
    width: 100%;
    padding-left: 0;
    text-align: center;
    line-height: 2em;
    
    h1{
      font-size: 2em;
      z-index: -1;
    }
    
    p {
      font-size: 1em;
      margin: 0;
      padding: 0;
    }
  `}
`;

export const ContentContainer = styled(Half)`
  overflow: auto;
  width: 55%;
  text-align: left;
  font-size: 1.5em;

  ${theme.mediaQuery.tablet`
    // width: 100%;
    font-size: 1em;
    padding: 2em;
  `}
`;

const StyledLink = styled(Link)`
  position: absolute;
  top: 45vh;
  left: 5vh;
  font-size: 5em;
  color: ${theme.light.colors.second};

  ${theme.mediaQuery.tablet`
    top: 70px;
    font-size: 2em;
    left: 3vw;
    z-index: 1;
  `}
`;

const postParam = {
  title: "",
  content: "",
  description: "",
};

export default function PostDetail() {
  const [contents, setContents] = useState(postParam);
  const { title, content, description } = contents;
  const { id } = useParams();

  useEffect(() => {
    fetch(fetchAddr + `/${id}`)
      .then((response) => response.json())
      .then((data) => setContents(data));
  }, [id]);

  return (
    <PageTemplate>
      <StyledLink to="/posts">&larr;</StyledLink>
      <PostTitle className="MainPostTitle">
        <Main>{title}</Main>
        <p>{description}</p>
      </PostTitle>
      <ContentContainer className="contentContainer">
        <ReactMarkdown children={content} />
      </ContentContainer>
    </PageTemplate>
  );
}
