import styled from "styled-components";
import { Main } from "../assets/Titles";
import { Half } from "./HalfContainer";
import { metaData } from "../../data/metaData";
import theme from "../../styles/theme";

export default function WhoAmITemplate() {
  const WhoAmITemplate = styled.section`
    display: flex;
    flex-direction: row;
    width: 95%;
    height: 80vh;
    background: ${(props) => props.theme.colors.third};
  `;

  const TitleBox = styled(Half)`
    justify-content: flex-start;
    padding-top: 25vh;

    ${theme.mediaQeury.tablet`
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

    ${theme.mediaQeury.tablet`
      p{
        font-size: 2em;
      }
    `}

    ${theme.mediaQeury.mobile`
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

    /* ${theme.mediaQeury.tablet`
      padding-top: 5em;
    `} */
  `;

  return (
    <WhoAmITemplate>
      <TitleBox>
        <WhoAmITitle>whoami</WhoAmITitle>
      </TitleBox>
      <MenuTitleBox>
        <p>daymoon</p>
        <p>Frontend Developer</p>
        <SubTitleContainer className="subtitleContainer">
          {/* <SubTitle title="경력" /> */}
          {metaData.career.map((career) => (
            <CareerContainer className="careerContainer" key={career.id}>
              <b>{career.period}</b>
              <p>{career.company}</p>
              <p>{career.job}</p>
              <span>{career.stack}</span>
            </CareerContainer>
          ))}
        </SubTitleContainer>
      </MenuTitleBox>
    </WhoAmITemplate>
  );
}
