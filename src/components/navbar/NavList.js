import styled from "styled-components";
import NavLink from "./NavLink";

const NavList = ({ links }) => {
  return (
    <ul>
      {links.map((navItem) => {
        return (
          <li>
            <NavLink href={navItem.link}>{navItem.text}</NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default NavList;
