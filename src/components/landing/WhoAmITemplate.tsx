import styled from "styled-components";
import { Main, SubTitle } from "../assets/Titles";
import { Half } from "./HalfContainer";
import metaData from "../../data/metaData";

export default function WhoAmITemplate() {
  const WhoAmITemplate = styled.section`
    display: flex;
    flex-direction: row;
    width: 95%;
    height: fit-content;
    padding: 10em 0;
    background: ${(props) => props.theme.colors.third};
  `;

  const TitleBox = styled(Half)`
    justify-content: flex-start;
    align-items: flex-start;
  `;

  const MenuTitleBox = styled(Half)`
    flex-direction: column;
    justify-content: center;

    p {
      font-size: 2em;
      margin: 0;
    }
  `;

  const WhoAmITitle = styled(Main)`
    margin-left: 9.6vw;
  `;

  const SubTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 3vw;

    &:first-child {
      /* margin-bottom: 5em; */
    }
  `;

  const CareerContainer = styled.div`
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
        <SubTitleContainer>
          <SubTitle title="경력" />
          {metaData.career.map((career) => (
            <CareerContainer key={career.id}>
              <p>{career.period}</p>
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
