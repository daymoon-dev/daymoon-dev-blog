import { TitleTemplate, PageTemplate } from "../components/common";
import { ContentTemplate } from "../components/posts";
import { useEffect, useState } from "react";
import { fetchAddr } from "../data/metaData";

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

export type PostProps = {
  id: string;
  title: string;
  description: string;
};
