import styled from "styled-components";
import { useState } from "react";
import Container from "../../layout/Container";
import MobileNav from "./MobileNav";
import Logo from "../logo/Logo";
import Burger from "./Burger";

const StyledNavbar = styled.nav`
  width: 100%;
  background: var(--primary-color);
  padding: 1rem;
  color: var(--text-color-white);
  .navbar-spacer {
    display: flex;
    justify-content: space-between;
  }
`;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <StyledNavbar>
      <Container>
        <div className="navbar-spacer">
          <div>
            <Logo logo="white" />
          </div>

          <div>
            <Burger open={open} setOpen={setOpen} />
          </div>
        </div>
      </Container>
      <MobileNav setOpen={setOpen} open={open} />
    </StyledNavbar>
  );
};

export default Navbar;
