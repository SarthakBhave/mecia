import React from "react";
import styled from "styled-components";

const ActualLogo = styled.img`
  height: ${({ size }) => (size ? `${size}px` : "72px")};
  position: relative;
  right: 100px;
  top: 5px;
`;

const Logo = ({ size }) => {
  return (
    <ActualLogo
      size={size}
      src={require("../../images/LogoWhite.svg").default}
    />
  );
};

export default Logo;
