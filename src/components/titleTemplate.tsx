import styled from "styled-components";
import theme from "../styles/theme";
import { Main } from "./index";
import { Half } from "./landing";

export const Title = styled(Half)`
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${theme.mediaQuery.tablet`
    width: 100%;
    display: inline;
    text-align: center;
  `}
`;

export default function TitleTemplate({ title }: { title: string }) {
  return (
    <Title>
      <Main>{title}</Main>
    </Title>
  );
}
