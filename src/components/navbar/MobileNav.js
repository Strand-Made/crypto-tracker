import styled, { css } from "styled-components";
import { HiX } from "react-icons/hi";
import Logo from "../logo/Logo";

const MobileButton = styled.button`
  display: none;
  ${(props) =>
    props.open &&
    css`
      display: block;
    `}
  cursor: pointer;
  background: none;
  border: none;
  color: var(--primary-color);
`;

const StyledList = styled.ul`
  position: absolute;
  background: var(--background-color);
  height: 100vh;
  width: 0;
  padding: 1rem;
  z-index: 1;
  transition-property: width;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
  transform: translate(150px);
  top: 0;
  right: 0;
  ${(props) =>
    props.open &&
    css`
      width: 100%;
      transform: translate(0);
    `}

  .mobile-nav-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }
`;

const MobileNav = ({ open, setOpen }) => {
  const handleClick = () => setOpen(!open);
  return (
    <StyledList open={open}>
      <div className="mobile-nav-wrapper">
        <div>
          <Logo logo="blue" />
        </div>
        <MobileButton open={open} onClick={handleClick}>
          <HiX size={35} />
        </MobileButton>
      </div>
    </StyledList>
  );
};

export default MobileNav;
