import { Link } from "react-router-dom";
import { PostProps } from "../../pages/posts";
import { Content } from "./styles/contentTemplate.style";

export default function ContentTemplate({
  posts,
  loading,
}: {
  posts: PostProps[];
  loading: boolean;
}) {
  return (
    <Content>
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
    </Content>
  );
}
