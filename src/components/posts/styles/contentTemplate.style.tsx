import styled from "styled-components";
import { Half } from "../../landing/styles/halfContainer.style";
import theme from "../../../styles/theme";

const Content = styled(Half)`
  flex-direction: column;
  height: 100%;
  overflow: auto;

  span {
    font-size: 1.5em;
    color: ${(props) => props.theme.colors.second};

    &:hover {
      text-decoration: underline;
    }
  }

  p {
    margin: 0 0 1em 0;
    width: 75%;
    color: ${(props) => props.theme.colors.second};
  }

  ${theme.mediaQuery.tablet`
      width: 100%;
      align-items: center;

      p{
        // display: none;
        width: 100%;
        font-size: 0.8em;
      }
    `}
`;

export { Content };
