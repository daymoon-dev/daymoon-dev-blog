import React, { ReactElement } from "react";
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
  const menuClick = (e: React.MouseEvent<HTMLElement>) => {
    setIsOpen(!isOpen);
  };

  return (
    <NavList className="navlist" isOpen={isOpen}>
      {element.map((element) => (
        <li key={element.id}>
          <Link onClick={menuClick} to={element.path}>
            {element.value}
          </Link>
        </li>
      ))}
    </NavList>
  );
}

export default NavElements;
