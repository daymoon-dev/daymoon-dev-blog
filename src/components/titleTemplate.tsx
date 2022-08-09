import styled from "styled-components";
import { Main } from "./index";
import { Half } from "./landing";

export const Title = styled(Half)`
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default function TitleTemplate({ title }: { title: string }) {
  return (
    <Title>
      <Main>{title}</Main>
    </Title>
  );
}
