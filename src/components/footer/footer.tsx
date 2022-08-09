import { metaData } from "../../data/metaData";
import FooterContainer from "./styles/footer.style";

export default function Footer() {
  return (
    <FooterContainer className="footer">
      <p>Copyright (c) 2022. {metaData.personal.nickname}</p>
    </FooterContainer>
  );
}
