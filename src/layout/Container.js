import styled from "styled-components";

const StyledContainer = styled.div`
  width: auto;
  margin: 0 auto;
`;

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
