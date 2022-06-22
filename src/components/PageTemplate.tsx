import styled from "styled-components";

export default function PageTemplate({ children }: { children: any }) {
  const PageTemplate = styled.section`
    display: flex;
    flex-direction: row;
    height: 90vh;
    width: 100%;
  `;
  return <PageTemplate>{children}</PageTemplate>;
}
