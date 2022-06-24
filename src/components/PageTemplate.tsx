import styled from "styled-components";

export const PageTemplates = styled.section`
  display: flex;
  flex-direction: row;
  height: 90vh;
  width: 100%;
`;
export default function PageTemplate({ children }: { children: any }) {
  return <PageTemplates>{children}</PageTemplates>;
}
