import React from "react";
import styled from "styled-components";

const ActualTypo = styled.img`
  height: ${({ size }) => (size ? `${size}px` : "70px")};
`;

const Typo = ({ size }) => {
  return (
    <ActualTypo size={size} src={require("../../images/mono.svg").default} />
  );
};

export default Typo;
