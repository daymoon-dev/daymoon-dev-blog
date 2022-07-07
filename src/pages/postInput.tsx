import { useState } from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import PageTemplate from "../components/PageTemplate";
import { ContentContainer, PostTitle } from "./postDetail";

const PostInputTemplate = styled(PageTemplate)``;
const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const PostInputTitle = styled(PostTitle)`
  justify-content: flex-end;
  height: 100%;
`;

const PostTextArea = styled.textarea`
  width: 100%;
  border: 0;
  background: transparent;
  font-size: 2em;
  resize: none;

  &:focus {
    outline: none;
  }
`;

const PostInputArea = styled(PostTextArea)`
  height: 70%;
  font-size: 5em;
  text-align: right;
`;

const Button = styled.button`
  position: absolute;
  width: fit-content;
  height: fit-content;
  padding: 1em;
  right: center;
  bottom: 1em;
  background: ${(props) => props.theme.colors.primary};
  border: 1 solid black;

  &:hover {
    background: ${(props) => props.theme.colors.third};
  }
`;

export default function PostInput() {
  const [inputText, setInputText] = useState({ title: "", content: "" });
  const { title, content } = inputText;

  const postInputChange = (e: any) => {
    const { name, value } = e.target;

    setInputText({
      ...inputText,
      [name]: value,
    });
  };

  const postIt = (e: any) => {
    e.preventDefault();
    const { name, value } = e.target;

    fetch("https://2kqdat8o2c.execute-api.ap-northeast-2.amazonaws.com/post", {
      method: "PUT",
      body: JSON.stringify({
        id: new Date().getTime().toString(),
        ...inputText,
        [name]: value,
      }),
    })
      .then((res) => res.ok && setInputText({ title: "", content: "" }))
      .catch((error) => console.error(error));
  };

  return (
    <PostInputTemplate>
      <Form className="classForm" onSubmit={postIt}>
        <PostInputTitle>
          <PostInputArea
            autoFocus
            required
            className="postInput"
            placeholder="제목"
            name="title"
            value={title}
            onChange={postInputChange}
          />
        </PostInputTitle>
        <ContentContainer>
          <PostTextArea
            className="postTextArea"
            placeholder="내용을 입력하세요."
            name="content"
            value={content}
            onChange={postInputChange}
          />
          <Button>게시</Button>
        </ContentContainer>
      </Form>
      <ContentContainer>
        <ReactMarkdown children={content} />
      </ContentContainer>
    </PostInputTemplate>
  );
}
