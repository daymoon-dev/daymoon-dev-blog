import styled from "styled-components";

export const PageTemplates = styled.section`
  display: flex;
  flex-direction: row;
  height: 80vh;
  width: 100%;
  padding-top: 10vh;
`;
export default function PageTemplate({ children }: { children: any }) {
  return <PageTemplates>{children}</PageTemplates>;
}
