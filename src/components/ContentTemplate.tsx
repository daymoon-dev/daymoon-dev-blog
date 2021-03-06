import { Link } from "react-router-dom";
import styled from "styled-components";
import { PostProps } from "../pages/posts";
import { Half } from "./landing/HalfContainer";

export default function ContentTemplate({
  posts,
  loading,
}: {
  posts: PostProps[];
  loading: boolean;
}) {
  const ContentTemplate = styled(Half)`
    flex-direction: column;
    height: 100%;
    overflow: auto;

    span {
      margin-bottom: 0.5em;
      font-size: 1.5em;
      margin: 0 0 0.2em 0;
      color: ${(props) => props.theme.colors.second};

      &:hover {
        text-decoration: underline;
      }
    }

    p {
      margin: 0 0 1em 0;
      width: 75%;
      color: ${(props) => props.theme.colors.second};
    }
  `;

  return (
    <ContentTemplate>
      {loading
        ? "loading..."
        : posts.map((post: PostProps) => (
            <div key={post.id}>
              <Link to={`/posts/${post.id}`}>
                <span>{post.title}</span>
                <p>{post.description}</p>
              </Link>
            </div>
          ))}
    </ContentTemplate>
  );
}
