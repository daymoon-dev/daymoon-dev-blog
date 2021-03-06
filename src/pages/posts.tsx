import TitleTemplate from "../components/TitleTemplate";
import PageTemplate from "../components/PageTemplate";
import ContentTemplate from "../components/ContentTemplate";
import { useEffect, useState } from "react";
import { fetchAddr } from "../data/metaData";

export type PostProps = {
  id: string;
  title: string;
  description: string;
};

export default function Posts(): React.ReactElement {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);

    fetch(fetchAddr)
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
