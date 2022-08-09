import { metaData } from "../../data/metaData";
import { ContactContainer } from "./styles/nav.style";
import github from "../assets/image/github.svg";
import instagram from "../assets/image/instagram.svg";

export default function Contact() {
  return (
    <ContactContainer>
      <a href={metaData.personal.github} target="_blank" rel="noreferrer">
        <img src={github} alt="github" />
      </a>
      <a href={metaData.personal.instagram} target="_blank" rel="noreferrer">
        <img src={instagram} alt="instagram" />
      </a>
    </ContactContainer>
  );
}
