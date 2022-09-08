import React, { DetailedHTMLProps, ReactElement } from "react";
import { Link } from "react-router-dom";
import element from "../../data/NavElement";
import { NavList } from "./styles/nav.style";

function NavElements({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Function;
}): ReactElement {
  const menuClick = (e:any) => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  // const scrollToElement = (selector: string) => {
  //   const element = document.querySelector(selector);
  //   selector ? element?.scrollIntoView({behavior: "smooth"}): null;
  // };

  return (
    <NavList className="navlist" onClick={menuClick}>
      {element.map((element) => (
        <li key={element.id}>
          <Link to={element.path}>
            {element.value}
          </Link>
        </li>
      ))}
    </NavList>
  );
}

export default NavElements;
