import React from "react";
import styled from "styled-components";

const ActualLogo = styled.img`
  height: ${({ size }) => (size ? `${size}px` : "72px")};
  position: relative;
  left: 950px;
  top: 5px;
`;

const HCSlogo = ({ size }) => {
  return (
    <ActualLogo size={size} src={require("../../images/HCS.svg").default} />
  );
};

export default HCSlogo;
