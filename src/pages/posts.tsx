import TitleTemplate from "../components/TitleTemplate";
import PageTemplate from "../components/PageTemplate";
import ContentTemplate from "../components/ContentTemplate";
import { useEffect, useState } from "react";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`https://2kqdat8o2c.execute-api.ap-northeast-2.amazonaws.com/post`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin":
          "https://2kqdat8o2c.execute-api.ap-northeast-2.amazonaws.com",
      },
    })
      .then((response) => response.json())
      .then((data) => setPosts(data))
      // .then((date) => console.log(date))
      .catch((err) => console.log(err));
  }, [setPosts]);

  return (
    <PageTemplate>
      <TitleTemplate title="echo" />
      <ContentTemplate posts={posts} />
    </PageTemplate>
  );
}
