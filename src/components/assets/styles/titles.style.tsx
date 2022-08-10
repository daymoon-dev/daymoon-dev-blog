import styled from "styled-components";
import theme from "../../../styles/theme";

export const Main = styled.h1`
  font-size: 6.25em;
  font-weight: 400;
  margin: 0;

  ${theme.mediaQuery.mobile`
    font-size: 3em;
  `}
`;

export const Sub = styled.h2`
  margin-bottom: 0.3em;
  font-size: 2.25em;
  font-family: "NanumMyeongjo";
`;
