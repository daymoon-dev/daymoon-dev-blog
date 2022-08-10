import { metaData } from "../../data/metaData";
import {
  WhoAmI,
  TitleBox,
  MenuTitleBox,
  WhoAmITitle,
  SubTitleContainer,
  CareerContainer,
} from "./styles/whoAmITemplate.style";

export default function WhoAmITemplate() {
  return (
    <WhoAmI>
      <TitleBox>
        <WhoAmITitle>whoami</WhoAmITitle>
      </TitleBox>
      <MenuTitleBox>
        <p>이종엽</p>
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
    </WhoAmI>
  );
}
