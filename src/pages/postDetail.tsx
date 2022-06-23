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

export default function PostDetail() {
  return (
    <PageTemplate>
      <PostTitle>
        <MainTitle title="Lorem ipsum dolor sit amet consectetur, magni distinctio?" />
      </PostTitle>
      <ContentContainer>markdown section</ContentContainer>
    </PageTemplate>
  );
}
