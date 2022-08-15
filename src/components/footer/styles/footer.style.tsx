import styled from "styled-components";
import theme from "../../../styles/theme";

const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10vh;
  padding: 0 3em;
  color: ${(props) => props.theme.colors.second};
  bottom: 0;

  p {
    font-size: 0.8em;
  }

  ${theme.mediaQuery.tablet`
    height: 50px;
  `}

  ${theme.mediaQuery.mobile`
      justify-content: center;
      align-items: center;
      padding: 0;
    `}
`;

export default FooterContainer;
