import styled from "styled-components";
import TitleTemplate from "./TitleTemplate";
import WhoAmITemplate from "./WhoAmITemplate";

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
