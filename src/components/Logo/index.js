import React from "react";
import styled from "styled-components";

const ActualLogo = styled.img`
  height: ${({ size }) => (size ? `${size}px` : "74px")};
`;

const Logo = ({ size }) => {
  return (
    <ActualLogo
      size={size}
      src={require("../../images/white_logo.svg").default}
    />
  );
};

export default Logo;
