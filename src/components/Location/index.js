import React from "react";
import styled from "styled-components";

const ActualLogo = styled.img`
  height: ${({ size }) => (size ? `${size}px` : "30px")};
  position: relative;
  right: 2px;
  top: 2px;
`;

const Location = ({ size }) => {
  return (
    <a href="https://www.google.com/maps/dir/22.4607697,73.0759443/svit+vasad/@22.4673638,73.0760093,16z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x395fb55277d1e457:0xaf7e43a3d29561b!2m2!1d73.0763484!2d22.4690063">
      <ActualLogo
        size={size}
        src={require("../../images/map-pin.svg").default}
      />
    </a>
  );
};

export default Location;
