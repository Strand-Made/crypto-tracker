import styled from "styled-components";
import { HiMenu, HiX } from "react-icons/hi";

const MobileButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  color: inherit;
`;

const Burger = ({ open, setOpen }) => {
  const handleClick = () => setOpen(!open);
  return (
    <MobileButton onClick={handleClick}>
      {open ? <HiX size={35} /> : <HiMenu size={35} />}
    </MobileButton>
  );
};

export default Burger;
