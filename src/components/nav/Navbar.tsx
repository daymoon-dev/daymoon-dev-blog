import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo";
import NavElements from "./NavElements";

export default function Navbar() {
  const Navbar = styled.div`
    display: flex;
    height: 90px;
    padding: 0 3em;
    color: ${(props) => props.theme.colors.primary};
    align-items: center;

    a {
      text-decoration: none;
      color: ${(props) => props.theme.colors.navElements};
    }
  `;

  const ContactContainer = styled.div`
    flex: 1;
    line-height: 90px;
    text-align: right;
    color: red;
  `;

  return (
    <Navbar>
      <Logo>
        <Link to="/">daymoon's Dev Blog</Link>
      </Logo>
      <NavElements />
      <ContactContainer>Contact</ContactContainer>
    </Navbar>
  );
}
