import styled from "styled-components";
import { metaData } from "../../data/metaData";

export default function Footer() {
  const Footer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 10vh;
    padding: 0 3em;
    color: ${(props) => props.theme.colors.second};
  `;

  return (
    <Footer className="footer">
      <p>Copyright (c) 2022. {metaData.personal.nickname}</p>
    </Footer>
  );
}
