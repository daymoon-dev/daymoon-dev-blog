import styled from "styled-components";
import TitleTemplate from "./titleTemplate";
import WhoAmITemplate from "./whoAmITemplate";

const LandingContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function LandingPage() {
  return (
    <>
      <LandingContainer>
        <TitleTemplate />
        <WhoAmITemplate />
      </LandingContainer>
    </>
  );
}
