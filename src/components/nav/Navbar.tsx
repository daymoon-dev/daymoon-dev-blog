import styled from "styled-components";
import { metaData } from "../../data/metaData";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo";
import NavElements from "./NavElements";
import theme from "../../styles/theme";
import github from "../assets/github.svg";
import instagram from "../assets/instagram.svg";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const Navbar = styled.header`
    position: fixed;
    display: flex;
    left: 0;
    right: 0;
    padding: 0 1.5em;
    height: 50px;
    align-items: center;

    / a {
      text-decoration: none;
      color: ${(props) => props.theme.colors.navElements};
    }

    #hamburger-menu {
      display: none;
    }

    .hamburger-container {
      display: none;
      width: 30px;
      height: 18px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }

    .hamburger-button {
      background-color: ${theme.light.colors.second};
      height: 2px;
      width: 15px;
    }

    .hamburger-button::before,
    .hamburger-button::after {
      position: absolute;
      display: block;
      background-color: ${theme.light.colors.second};
      height: 2px;
      width: 20px;
    }

    .hamburger-button::before {
      content: "";
      margin-top: -6px;
    }

    .hamburger-button::after {
      content: "";
      margin-top: 6px;
    }

    #hamburger-menu:checked + .hamburger-container .hamburger-button {
      background: rgba(255, 255, 255, 0);
    }

    #hamburger-menu:checked + .hamburger-container .hamburger-button::before {
      margin-top: 0px;
      transform: rotate(405deg);
    }

    #hamburger-menu:checked + .hamburger-container .hamburger-button::after {
      margin-top: 0px;
      transform: rotate(-405deg);
    }

    ${theme.mediaQeury.tablet`
      padding: 0 1em;          

      .hamburger-container{
        display: flex;
      }

      #hamburger-menu:checked ~ ul{
        display: flex;
      }
      
      #hamburger-menu:checked ~ p {
        position: absolute;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        background-color: ${theme.light.colors.primary}
        width: 100%;
        top: 196.8px;
        right: 0;
        padding-right: 1em;
        padding-bottom: 1em;
        margin: 0;
        opacity: 0.8;
      }

      ul {
        display: none;
        align-items: flex-end;
        position: absolute;
        width: 100%;
        flex-direction: column;
        right: 0;
        padding: 0.5em;
        top: 50px;
        background-color: ${theme.light.colors.primary};
        transition: height 1s;
        transition-timing-function: cubic-bezier(0.5,5,0.5,1.56);
      }
      
      ul > li {
        padding: 0.8em;
      }
      
      ul > li > a {
        color: ${theme.light.colors.navElements}
      }
      `}

    ${theme.mediaQeury.mobile`
      padding: 0 1em;
    `}
  `;

  const ContactContainer = styled.p`
    flex: 1;
    text-align: right;
    padding: 0;

    img {
      width: 20px;
      height: 20px;
      opacity: 0.7;
    }

    a:not(:last-child) {
      margin: 0 0.4em;
    }

    ${theme.mediaQeury.tablet`
      display: none;
    `}
  `;

  return (
    <Navbar className="Navbar">
      <Logo>
        <Link to="/">Daymoon Dev.</Link>
      </Logo>
      <input id="hamburger-menu" type="checkbox" />
      <label className="hamburger-container" htmlFor="hamburger-menu">
        <div className="hamburger-button"></div>
      </label>
      <NavElements isOpen={isOpen} setIsOpen={setIsOpen} />
      <ContactContainer>
        <a href={metaData.personal.github} target="_blank" rel="noreferrer">
          <img src={github} alt="github" />
        </a>
        <a href={metaData.personal.instagram} target="_blank" rel="noreferrer">
          <img src={instagram} alt="instagram" />
        </a>
      </ContactContainer>
    </Navbar>
  );
}
