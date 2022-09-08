import styled from "styled-components";
import theme from "../../../styles/theme";

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  flex: 1;

  li {
    list-style: none;

    &:nth-child(n + 2) {
      margin-left: 2em;
    }
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.navElements};
  }

  a:hover {
    text-decoration: underline;
  }

  ${theme.mediaQuery.tablet`
    display: none;
    align-items: flex-end;
    position: absolute;
    width: 100%;
    flex-direction: column;
    right: 0;
    padding: 0.5em;
    top: 50px;
    // background-color: ${theme.light.colors.primary};

    li {
      padding: 0.8em;
    }
  
    li > a {
      color: ${theme.light.colors.navElements};
    }  
  `}

  ${theme.mediaQuery.mobile`
      padding: 0 1em;
  `}
`;

const NavContainer = styled.header`
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

  ${theme.mediaQuery.tablet`
    padding: 0 1em;
    
    .hamburger-container{
      display: flex;
    }

    #hamburger-menu:checked ~ ul{
      display: flex;
    }

    #hamburger-menu:checked ~ p {
      display: flex;
    }
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

  ${theme.mediaQuery.tablet`
    display: none;
    position: absolute;
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
    `}
`;

export { NavList, NavContainer, ContactContainer };
