import styled from "styled-components";
import theme from "../../../styles/theme";

const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10vh;
  padding: 0 3em;
  color: ${(props) => props.theme.colors.second};

  p {
    font-size: 0.8em;
  }

  ${theme.mediaQeury.mobile`
      height: 5vh;
      justify-content: center;
    `}
`;

export default FooterContainer;
