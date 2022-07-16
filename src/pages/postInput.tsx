import { useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import PageTemplate from "../components/PageTemplate";
import { fetchAddr } from "../data/metaData";
import { ContentContainer, PostTitle } from "./postDetail";

const PostInputTemplate = styled(PageTemplate)``;
const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const PostInputTitle = styled(PostTitle)`
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
`;

const PostTextArea = styled.textarea`
  width: 100%;
  border: 0;
  background: transparent;
  font-size: 2em;
  resize: none;
  height: 100%;

  &:focus {
    outline: none;
  }
`;

const PostInputArea = styled(PostTextArea)`
  height: 50%;
  font-size: 5em;
  text-align: right;
`;

const Description = styled.input`
  background: transparent;
  width: 100%;
  height: 30%;
  font-size: 1em;
  border: 0;
  text-align: right;

  &:focus {
    outline: none;
  }
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
  const [inputText, setInputText] = useState({
    title: "",
    content: "",
    description: "",
  });
  const { title, content, description } = inputText;
  const buttonRef = useRef<HTMLButtonElement>(null);
  const postTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setInputText({
      ...inputText,
      [name]: value,
    });
  };

  const postInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText({ ...inputText, description: e.target.value });
  };

  const postIt = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, value } = e.currentTarget;

    buttonRef.current!.disabled = true;

    fetch(fetchAddr, {
      method: "PUT",
      body: JSON.stringify({
        id: new Date().getTime().toString(),
        ...inputText,
        [name]: value,
      }),
    })
      .then(
        (res) =>
          res.ok && setInputText({ title: "", content: "", description: "" })
      )
      .then(() => (buttonRef.current!.disabled = false))
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
            onChange={postTextAreaChange}
          />
          <Description
            className="description"
            placeholder="글 요약"
            name="description"
            value={description}
            onChange={postInputChange}
          />
        </PostInputTitle>
        <ContentContainer>
          <PostTextArea
            className="postTextArea"
            placeholder="내용을 입력하세요."
            name="content"
            value={content}
            onChange={postTextAreaChange}
          />
        </ContentContainer>
        <Button ref={buttonRef}>게시</Button>
      </Form>
      <ContentContainer>
        <ReactMarkdown children={content} />
      </ContentContainer>
    </PostInputTemplate>
  );
}
