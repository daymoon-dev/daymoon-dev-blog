import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { MainTitle } from "../components/assets/Titles";
import { Half } from "../components/landing/HalfContainer";
import PageTemplate from "../components/PageTemplate";
import { useParams } from "react-router-dom";

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

export default function PostDetail() {
  const [contents, setContents] = useState({ title: "", content: "" });
  const { title, content } = contents;
  const { id } = useParams();

  useEffect(() => {
    fetch(
      `https://2kqdat8o2c.execute-api.ap-northeast-2.amazonaws.com/post/${id}`
    )
      .then((response) => response.json())
      .then((data) => setContents(data));
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
