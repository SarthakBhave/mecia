import React, { useState } from "react";
import {
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
import { Button } from "../ButtonElements";
import Typo from "../typo";
import Location from "../Location";
import Calender from "../Calender";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroContent>
        <HeroH1>
          <Typo size={150} />
        </HeroH1>
        <HeroP>
          MECIA Hacks is an internal hackathon, a combination of Ideathon + 24
          hours long in-person live hackathon being organized by SVIT Vasad.
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Register Now! {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>

        <HeroP>
          <Calender /> 22 Sept. Ideathon | 23-24 Sept. Hackathon
          {/* </HeroP>
        <HeroP> */}
          <br />
          <Location />
          Sardar Vallabhbhai Patel Institute of Technology, Vasad
        </HeroP>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
