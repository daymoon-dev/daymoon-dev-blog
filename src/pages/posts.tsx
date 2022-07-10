import TitleTemplate from "../components/TitleTemplate";
import PageTemplate from "../components/PageTemplate";
import ContentTemplate from "../components/ContentTemplate";
import { useEffect, useState } from "react";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://2kqdat8o2c.execute-api.ap-northeast-2.amazonaws.com/post`)
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .then(() => setLoading(false))
      .catch((err) => console.log(err));
  }, []);

  return (
    <PageTemplate>
      <TitleTemplate title="echo" />
      <ContentTemplate posts={posts} loading={loading} />
    </PageTemplate>
  );
}
