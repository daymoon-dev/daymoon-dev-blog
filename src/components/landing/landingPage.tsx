import TitleTemplate from "./titleTemplate";
import WhoAmITemplate from "./whoAmITemplate";
import { LandingContainer } from "./styles/landingPage.style";

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
