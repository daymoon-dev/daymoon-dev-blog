import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import { SubTitle } from "./assets/Titles";
import { Half } from "./landing/HalfContainer";

export default function ContentTemplate() {

  useEffect(() => {
    fetch(`http://localhost:3001/posts`, {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "http://localhost:3000"
      }
    }).then(response => response.json())
      .then(content => setContents(content));
  }, [])

  const [contents, setContents] = useState<any[]>([]);

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
      {contents.map(content =>
        <>
          <Link to={`/postdetail/${content.id}`}>
            <span key={content.id}>{content.title}</span>
            <p>lorem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque tenetur tempora placeat corporis maiores saepe nam cumque ipsa exercitationem quidem obcaecati illum veniam, magnam, nesciunt voluptatem dolores accusamus asperiores praesentium?</p>
          </Link>
        </>
      )
      }
    </ContentTemplate >
  );
}
