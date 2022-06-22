import styled from "styled-components";
import { Main } from "../components/assets/Titles";
import { Half } from "../components/landing/HalfContainer";
import PageTemplate from "../components/PageTemplate";

export default function PostDetail() {
  const PostTitle = styled(Half)`
    align-items: center;
    text-align: right;
    line-height: 5em;
    padding-left: 3em;
  `;

  const ContentContainer = styled(Half)`
    /* height: 100%; */
    justify-content: flex-start;
    overflow: auto;
    width: 55%;
    text-align: left;
    font-size: 2em;
    padding: 3.1em 3em 0 1.5em;
  `;

  return (
    <PageTemplate>
      <PostTitle>
        <Main>Lorem ipsum dolor sit amet consectetur, magni distinctio?</Main>
      </PostTitle>
      <ContentContainer>markdown section</ContentContainer>
    </PageTemplate>
  );
}
