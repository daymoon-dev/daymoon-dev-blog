import styled from "styled-components";
import theme from "../styles/theme";

export const PageTemplates = styled.section`
  display: flex;
  flex-direction: row;
  height: 80vh;
  width: 100%;
  padding-top: 10vh;

  ${theme.mediaQuery.tablet`
    
  `}
`;
export default function PageTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PageTemplates>{children}</PageTemplates>;
}
