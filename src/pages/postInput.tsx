import styled from "styled-components";
import PageTemplate from "../components/PageTemplate";
import { ContentContainer, PostTitle } from "./postDetail";
import { useState } from "react";

const PostInputTitle = styled(PostTitle)`
  justify-content: flex-end;
`;

export default function PostInput() {
  const [postInput, setPostInput] = useState("");

  const PostInput = styled.input`
    width: 70%;
    height: fit-content;
    font-size: 5em;
    background-color: transparent;
    border: 0 solid ${(props) => props.theme.colors.second};
    text-align: right;

    &:focus {
      outline: none;
    }
  `;

  const PostTextArea = styled.textarea`
    width: 100%;
    border: 0;
    background: transparent;
    font-size: 2em;
    text-align: left;
    border-left: 1px solid ${(props) => props.theme.colors.second};

    &:focus {
      outline: none;
    }
  `;

  const postInputs = (e: any) => {
    console.log(e.target.value);
  };

  const postTextArea = (e: any) => {
    console.log(e.target.value);
  };

  const postArticle = (e: any) => {};

  return (
    <PageTemplate>
      <form onSubmit={postArticle}>
        <PostInputTitle>
          <PostInput
            className="postInput"
            autoFocus
            placeholder="제목"
            onChange={postInputs}
          />
        </PostInputTitle>
        <ContentContainer>
          <PostTextArea className="postTextArea" onChange={postTextArea} />
        </ContentContainer>
        <button>execute</button>
      </form>
    </PageTemplate>
  );
}
