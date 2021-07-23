import styled from "styled-components";

const ButtonStyle = styled.button`
  background: ${(props) =>
    props.secondary ? "var(--primary-color)" : "var(--secondary-color)"};
  color: var(--text-color-white);
  border-radius: 10px;
  padding: 0.5rem 1rem;
`;

const Button = ({ children, secondary }) => {
  return <ButtonStyle>{children}</ButtonStyle>;
};

export default Button;
