import { Link } from "react-router-dom";
import styled from "styled-components";
import element from "../../data/NavElement";

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  flex: 1;
  line-height: 90px;

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
`;

function NavElements() {
  return (
    <NavList>
      {element.map((element) => (
        <li key={element.id}>
          <Link to={element.path}>{element.value}</Link>
        </li>
      ))}
    </NavList>
  );
}

export default NavElements;
