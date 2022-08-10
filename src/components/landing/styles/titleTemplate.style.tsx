import styled from "styled-components";
import { Half } from "./halfContainer.style";

const Title = styled.section`
  display: flex;
  height: 100vh;
  width: 100%;
  align-items: center;
  background: ${(props) => props.theme.colors.primary};
`;

const Line = styled.div`
  height: 125px;
  border-right: 1px solid black;
`;

const TitleContainer = styled(Half)`
  justify-content: center;
  align-items: center;

  p {
    font-size: 1.5em;
    margin: 0;
  }
`;

export { Title, Line, TitleContainer };
