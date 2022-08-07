import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo";
import NavElements from "./NavElements";
import { theme } from "../../styles/theme";

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
      display: block;
      background-color: black;
      position: absolute;
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
      justify-content: space-between;
      
      .hamburger-container{
        display: flex;
      }

      #hamburger-menu:checked ~ ul{
        display: flex;
        align-items: flex-end;
      }
      
      ul {
        display: none;
        position: absolute;
        width: 100%;
        flex-direction: column;
        right: 0;
        padding: 0.5em;
        top: 25px;
        background-color: #F0EEE9;
        opacity: 0.5;
      }
      
      ul > li {
        padding: 1em;
      }
      
      ul > li > a {
        color: black;
      }
      `}

    ${theme.mediaQeury.mobile`
      padding: 0 1em;
    `}
  `;

  const ContactContainer = styled.div`
    flex: 1;
    text-align: right;
    color: red;

    ${theme.mediaQeury.tablet`
      display: none;
    `}
  `;

  return (
    <Navbar className="Navbar">
      <Logo>
        <Link to="/">daymoon's Dev Blog</Link>
      </Logo>
      <input id="hamburger-menu" type="checkbox" />
      <label className="hamburger-container" htmlFor="hamburger-menu">
        <div className="hamburger-button"></div>
      </label>
      <NavElements />
      <ContactContainer>Contact</ContactContainer>
    </Navbar>
  );
}
