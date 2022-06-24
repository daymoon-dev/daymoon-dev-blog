import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { MainTitle } from "../components/assets/Titles";
import { Half } from "../components/landing/HalfContainer";
import PageTemplate from "../components/PageTemplate";

export const PostTitle = styled(Half)`
  align-items: center;
  text-align: right;
  line-height: 5em;
  padding-left: 3em;
`;

export const ContentContainer = styled(Half)`
  justify-content: flex-start;
  overflow: auto;
  width: 55%;
  text-align: left;
  font-size: 2em;
  padding: 3.1em 3em 0 1.5em;
`;

export default function PostDetail(id: any) {
  const [contents, setContents] = useState({ content: "", title: "" });
  const { content, title } = contents;

  useEffect(() => {
    fetch(`http://localhost:3001/posts/${id}`)
      .then(response => response.json())
      .then((data) => setContents(data))
  }, [id]);

  return (
    <PageTemplate>
      <PostTitle className="postTitle">
        <MainTitle title={title} />
      </PostTitle>
      <ContentContainer className="contentContainer">
        <ReactMarkdown children={content} />
      </ContentContainer>
    </PageTemplate>
  );
}
