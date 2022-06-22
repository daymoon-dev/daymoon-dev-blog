import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo";
import NavElements from "./NavElements";

export default function Navbar() {
  const Navbar = styled.header`
    position: fixed;
    display: flex;
    left: 0;
    right: 0;
    padding: 0 3em;
    height: 50px;
    align-items: center;
    / a {
      text-decoration: none;
      color: ${(props) => props.theme.colors.navElements};
    }
  `;

  const ContactContainer = styled.div`
    flex: 1;
    text-align: right;
    color: red;
  `;

  return (
    <Navbar className="Navbar">
      <Logo>
        <Link to="/">daymoon's Dev Blog</Link>
      </Logo>
      <NavElements />
      <ContactContainer>Contact</ContactContainer>
    </Navbar>
  );
}
