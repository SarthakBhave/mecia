import React from "react";
import styled from "styled-components";

const ActualLogo = styled.img`
  height: ${({ size }) => (size ? `${size}px` : "30px")};
`;

const Logo = ({ size }) => {
  return (
    <ActualLogo size={size} src={require("../../images/mono.svg").default} />
  );
};

export default Logo;
