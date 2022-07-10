import { Link } from "react-router-dom";
import styled from "styled-components";
import { Half } from "./landing/HalfContainer";

export default function ContentTemplate({
  posts,
  loading,
}: {
  posts: any;
  loading: any;
}) {
  const ContentTemplate = styled(Half)`
    flex-direction: column;
    height: 100%;
    overflow: auto;
    /* justify-content: ; */

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

  console.log(loading);
  return (
    <ContentTemplate>
      {loading
        ? "loading..."
        : posts.map((post: any) => (
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
