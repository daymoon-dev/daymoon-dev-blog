import styled from "styled-components";
import theme from "../styles/theme";
import { Main } from "./index";
import { Half } from "./landing";

export const Title = styled(Half)`
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${theme.mediaQuery.tablet`
    width: 100vw;
    height: 50px;
    top: 0;
    position: absolute;
    text-align: center;
    margin-bottom: 3vh;
    z-index: -1;

    h1 {
      font-size: 1.5em;
    }
  `}
`;

export default function TitleTemplate({ title }: { title: string }) {
  return (
    <Title>
      <Main>{title}</Main>
    </Title>
  );
}
