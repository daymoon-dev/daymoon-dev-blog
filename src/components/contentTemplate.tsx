import { Link } from "react-router-dom";
import styled from "styled-components";
import { PostProps } from "../pages/posts";
import theme from "../styles/theme";
import { Half } from "./landing";

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
      font-size: 1.5em;
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

    ${theme.mediaQuery.tablet`
      width: 100%;
      align-items: center;

      p{
        // display: none;
        width: 100%;
        font-size: 0.8em;
      }
    `}
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
