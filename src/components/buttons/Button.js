import styled, { css } from "styled-components";

const ButtonStyle = styled.button`
  background: ${(props) =>
    props.secondary ? "var(--background-color)" : "var(--secondary-color)"};
  color: white;
  border-radius: ${(props) => (props.secondary ? "5px" : "20px")};
  padding: 0.5rem 1rem;
  border: none;
  transition: all 1s ease-in-out;
  &:hover {
    cursor: pointer;
  }
  ${(props) => {
    return (
      props.secondary &&
      css`
        border: var(--text-color-2) 1px solid;
        color: var(--text-color);
        display: flex;
        align-items: center;
      `
    );
  }}
`;

const Button = ({ children, secondary }) => {
  return <ButtonStyle secondary={secondary}>{children}</ButtonStyle>;
};

export default Button;
