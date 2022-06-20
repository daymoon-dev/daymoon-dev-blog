import styled from "styled-components";

export default function PageTemplate({ children }: { children: any }) {
  const PageTemplate = styled.section`
    display: flex;
    flex-direction: row;
    height: calc(90vh - 90px);
  `;
  return <PageTemplate>{children}</PageTemplate>;
}
