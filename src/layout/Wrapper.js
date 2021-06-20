import styled from "styled-components";

const StyledWrapper = styled.div`
  position: relative;
  height: 100%;
`;

const Wrapper = ({ children }) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};

export default Wrapper;
