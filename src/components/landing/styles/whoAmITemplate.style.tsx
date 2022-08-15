import styled from "styled-components";
import { Half } from "./halfContainer.style";
import theme from "../../../styles/theme";
import { Main } from "../../assets/styles/titles.style";

const WhoAmI = styled.section`
  display: flex;
  flex-direction: row;
  width: calc(100vw - 100px);
  height: calc(100vh - 10vh - 100px);
  background: ${(props) => props.theme.colors.third};

  ${theme.mediaQuery.tablet`
    width: calc(100vw - 100px);
    height: calc(100vh - 100px);

    flex-direction: column;
    justify-content: center;
    align-items: center;
    // text-align: right;
  `}

  ${theme.mediaQuery.mobile`
    width: 90%;
    // height: 80vh;
  `}
`;

const TitleBox = styled(Half)`
  justify-content: flex-start;
  padding-top: 25vh;

  ${theme.mediaQuery.tablet`
      padding-top: 0;
      justify-content: center;
      margin-bottom: 1em;
  `}
`;

const MenuTitleBox = styled(Half)`
  flex-direction: column;
  justify-content: center;
  width: 90%;

  p {
    font-size: 2em;
    margin: 0;
    letter-spacing: -1px;
  }

  ${theme.mediaQuery.tablet`
    text-align: center;
  `}

  ${theme.mediaQuery.mobile`
    p {
      font-size: 1.5em;
    }
    
    div > p {
      font-size: 1.0em;
    }
  `}
`;

const WhoAmITitle = styled(Main)`
  margin-left: 9.6vw;

  ${theme.mediaQuery.tablet`
    margin-left: 0;
  `}
`;

const SubTitleContainer = styled.div`
  padding-top: 3vw;

  p {
    letter-spacing: 0;
  }

  ${theme.mediaQuery.tablet`
    padding-top: 20%;
  `}
`;

const CareerContainer = styled.div`
  width: 100%;

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
