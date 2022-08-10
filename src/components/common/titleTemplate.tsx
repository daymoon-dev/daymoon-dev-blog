import { Title } from "./styles/titleTemplate.style";
import { Main } from "../assets/styles/titles.style";

export default function TitleTemplate({ title }: { title: string }) {
  return (
    <Title>
      <Main>{title}</Main>
    </Title>
  );
}
