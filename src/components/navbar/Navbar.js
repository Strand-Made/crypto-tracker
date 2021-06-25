import styled from "styled-components";
import { useState } from "react";
import Container from "../../layout/Container";
import { FaGooglePlay, FaApple } from "react-icons/fa";
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
    align-items: center;
  }

  .app-store {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 5px;
    &__icons:first-child {
      margin-right: 8px;
    }
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

          <div className="navbar-spacer">
            <div className="app-store">
              <FaApple className="app-store__icons" size={30} />
              <FaGooglePlay className="app-store__icons" size={25} />
            </div>
            <Burger open={open} setOpen={setOpen} />
          </div>
        </div>
      </Container>
      <MobileNav setOpen={setOpen} open={open} />
    </StyledNavbar>
  );
};

export default Navbar;
