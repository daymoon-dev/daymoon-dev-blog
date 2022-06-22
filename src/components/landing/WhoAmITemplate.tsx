import styled from "styled-components";
import { Main, SubTitle } from "../assets/Titles";
import { Half } from "./HalfContainer";
import metaData from "../../data/metaData";

export default function WhoAmITemplate() {
  const WhoAmITemplate = styled.section`
    display: flex;
    flex-direction: row;
    width: 95%;
    height: 80vh;
    background: ${(props) => props.theme.colors.third};
    /* height: fit-content; */
    /* padding: 10em 0; */
  `;

  const TitleBox = styled(Half)`
    justify-content: flex-start;

    padding-top: 25vh;
  `;

  const MenuTitleBox = styled(Half)`
    flex-direction: column;
    justify-content: center;

    p {
      font-size: 2em;
      margin: 0;
      letter-spacing: -1px;
    }
  `;

  const WhoAmITitle = styled(Main)`
    margin-left: 9.6vw;
  `;

  const SubTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
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
  `;

  return (
    <WhoAmITemplate>
      <TitleBox>
        <WhoAmITitle>whoami</WhoAmITitle>
      </TitleBox>
      <MenuTitleBox>
        <p>daymoon</p>
        <p>Frontend_Developer</p>
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
