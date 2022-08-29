import React from "react";
import styled from "styled-components";

const ActualLogo = styled.img`
  height: ${({ size }) => (size ? `${size}px` : "30px")};
  position: relative;
  right: 4px;
  top: 5px;
`;

const Calender = ({ size }) => {
  return (
    <ActualLogo
      size={size}
      src={require("../../images/calendar.svg").default}
    />
  );
};

export default Calender;
