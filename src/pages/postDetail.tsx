import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { MainTitle, PageTemplate } from "../components";
import { Half } from "../components/landing/halfContainer";
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
`;

export const ContentContainer = styled(Half)`
  flex-direction: column;
  justify-content: flex-start;
  overflow: auto;
  width: 55%;
  text-align: left;
  font-size: 2em;
  /* padding: 3.1em 3em 0 1.5em; */
`;

const StyledLink = styled(Link)`
  position: absolute;
  top: 45vh;
  left: 5vh;
  font-size: 5em;
  color: ${theme.light.colors.second};
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
      <PostTitle className="MainpostTitle">
        <MainTitle title={title} />
        <p>{description}</p>
      </PostTitle>
      <ContentContainer className="contentContainer">
        <ReactMarkdown children={content} />
      </ContentContainer>
    </PageTemplate>
  );
}
