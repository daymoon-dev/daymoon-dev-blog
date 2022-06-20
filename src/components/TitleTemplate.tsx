import styled from "styled-components";
import { Main } from "./assets/Titles";
import { Half } from "./landing/HalfContainer";

export default function TitleTemplate({ title }: { title: string }) {
  const TitleTemplate = styled(Half)`
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `;

  return (
    <TitleTemplate>
      <Main>{title}</Main>
    </TitleTemplate>
  );
}
