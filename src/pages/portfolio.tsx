import styled from "styled-components";
import { TitleTemplate, PageTemplate } from "../components/common";
import { Half } from "../components/landing/styles/halfContainer.style";

export default function Portfolio() {
  const PortfolioTemplate = styled(Half)`
    flex-direction: column;
    justify-content: center;
  `;
  return (
    <PageTemplate>
      <TitleTemplate title="Portfolio" />
      <PortfolioTemplate>portfolio section</PortfolioTemplate>
    </PageTemplate>
  );
}
