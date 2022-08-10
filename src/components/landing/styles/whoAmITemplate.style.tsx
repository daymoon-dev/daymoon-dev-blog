import styled from "styled-components";
import { Half } from "./halfContainer.style";
import theme from "../../../styles/theme";
import { Main } from "../../assets/styles/titles.style";

const WhoAmI = styled.section`
  display: flex;
  flex-direction: row;
  width: 95%;
  height: 80vh;
  background: ${(props) => props.theme.colors.third};
`;

const TitleBox = styled(Half)`
  justify-content: flex-start;
  padding-top: 25vh;

  ${theme.mediaQuery.tablet`
      padding-top: 10vh;
    `}
`;

const MenuTitleBox = styled(Half)`
  flex-direction: column;
  justify-content: center;

  p {
    font-size: 2em;
    margin: 0;
    letter-spacing: -1px;
  }

  ${theme.mediaQuery.tablet`
      p{
        font-size: 2em;
      }
    `}

  ${theme.mediaQuery.mobile`
      p{
        font-size: 1.3em;
      }
      padding-right: 1em;
    `}
`;

const WhoAmITitle = styled(Main)`
  margin-left: 9.6vw;
`;

const SubTitleContainer = styled.div`
  padding-top: 3vw;

  p {
    letter-spacing: 0;
  }
`;

const CareerContainer = styled.div`
  b {
    font-size: 1em;
  }
  p {
    color: ${(props) => props.theme.colors.second};
    font-size: 1em;
    margin: 0.1em 0;
  }
  span {
    color: ${(props) => props.theme.colors.navElements};
    font-size: 0.8em;
  }

  /* ${theme.mediaQuery.tablet`
      padding-top: 5em;
    `} */
`;

export {
  WhoAmI,
  TitleBox,
  MenuTitleBox,
  WhoAmITitle,
  SubTitleContainer,
  CareerContainer,
};
