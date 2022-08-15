import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo";
import NavElements from "./navElements";
import { NavContainer } from "./styles/nav.style";
import Contact from "./contact";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavContainer className="navbar" isOpen={isOpen}>
      <Logo>
        <Link to="/">Daymoon Dev.</Link>
      </Logo>
      <input id="hamburger-menu" type="checkbox" />
      <label className="hamburger-container" htmlFor="hamburger-menu">
        <div className="hamburger-button" />
      </label>
      <NavElements isOpen={isOpen} setIsOpen={setIsOpen} />
      <Contact />
    </NavContainer>
  );
}