import styled from "styled-components";
import theme from "../../../styles/theme";

export const PageTemplates = styled.section`
  display: flex;
  flex-direction: row;
  height: calc(100vh - 10vh - 50px);
  width: 100%;
  padding-top: 50px;

  ${theme.mediaQuery.tablet`
    flex-direction: column;
    height: calc(100vh - 100px);
  `}
`;
