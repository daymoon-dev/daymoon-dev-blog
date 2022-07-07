import { Link } from "react-router-dom";
import styled from "styled-components";
import { Half } from "./landing/HalfContainer";

export default function ContentTemplate({ posts }: { posts: any }) {
  const ContentTemplate = styled(Half)`
    flex-direction: column;
    height: 100%;
    padding-top: 50px;
    overflow: auto;
    justify-content: center;

    span {
      margin-bottom: 0.5em;
      font-size: 1.5em;
      margin: 0 0 0.2em 0;
    }

    p {
      margin: 0 0 1em 0;
      width: 75%;
    }
  `;

  return (
    <ContentTemplate>
      {posts.map((post: any) => (
        <>
          <Link to={`/posts/${post.id}`}>
            <span key={post.id}>{post.title}</span>
            <p>{post.summary}</p>
          </Link>
        </>
      ))}
    </ContentTemplate>
  );
}
