import styled, { css } from "styled-components";

const baseStyle = css`
  margin: ${(props) => (props.noMargin ? "0" : null)};
  font-weight: 600;
  font-family: "Acumin Pro", acumin-pro, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
    "Apple Color Emoji," "Segoe UI Emoji", "Segoe UI Symbol";
  margin-top: 0;
  text-align: ${(props) => {
    if (props.center) return "center";
    if (props.right) return "right";
    return "left";
  }};
  width: 100%;
`;
const HeadingOne = styled.h1`
  font-size: 3.052rem;
  margin-bottom: 45px;
  ${baseStyle}
`;

const HeadingTwo = styled.h2`
  font-size: 2.411rem;
  margin-bottom: 35px;
  ${baseStyle}
`;

const HeadingThree = styled.h3`
  font-size: 1.953rem;
  margin-bottom: 30px;
  ${baseStyle}
`;

const HeadingFour = styled.h4`
  font-size: 1.563rem;
  margin-bottom: 25px;
  ${baseStyle}
`;

const HeadingFive = styled.h5`
  font-size: 1.25rem;
  margin-bottom: 20px;
  ${baseStyle}
`;

const Heading = ({
  h2,
  h3,
  h4,
  h5,
  noMargin,
  center,
  left,
  right,
  ...props
}) => {
  if (h2)
    return (
      <HeadingTwo
        left={left}
        center={center}
        right={right}
        noMargin={noMargin}
        {...props}
      />
    );
  if (h3)
    return (
      <HeadingThree
        left={left}
        center={center}
        right={right}
        noMargin={noMargin}
        {...props}
      />
    );
  if (h4)
    return (
      <HeadingFour
        left={left}
        center={center}
        right={right}
        noMargin={noMargin}
        {...props}
      />
    );
  if (h5)
    return (
      <HeadingFive
        left={left}
        center={center}
        right={right}
        noMargin={noMargin}
        {...props}
      />
    );
  return (
    <HeadingOne
      left={left}
      center={center}
      right={right}
      noMargin={noMargin}
      {...props}
    />
  );
};

export default Heading;
