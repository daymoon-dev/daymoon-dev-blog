import { metaData } from "../../data/metaData";
import { Title, Line, TitleContainer } from "./styles/titleTemplate.style";

export default function TitleTemplate() {
  return (
    <Title className="titleTemplate">
      <TitleContainer className="titleContainer">
        <p>{metaData.personal.job}</p>
      </TitleContainer>
      <Line />
      <TitleContainer>
        <p>{metaData.personal.nickname}</p>
      </TitleContainer>
    </Title>
  );
}
