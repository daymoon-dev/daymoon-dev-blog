import styled from "styled-components";
import TitleTemplate from "../components/TitleTemplate";
import PageTemplate from "../components/PageTemplate";
import { Half } from "../components/landing/HalfContainer";
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
