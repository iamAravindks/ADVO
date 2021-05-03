import React, { useState } from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowRight,
  ArrowLeft,
} from "./AboutHeroStyle";
import { Button } from "../Button";
import Video from "../../../assets/videos/travel2.mp4";

const AboutHero = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => setHover((prevState) => !prevState);

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>Ready set Go</HeroH1>
        <HeroP>
          lorem ipsum dolor sit amet, consectetured adipiscing elit, sed diam
          nonumy eirmod tempor incididunt ut labore et dolore magna aliqu
        </HeroP>
        <HeroBtnWrapper>
          <Button to='/contact' onMouseEnter={onHover} onMouseLeave={onHover}>
            Contact US
            {hover ? <ArrowLeft /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default AboutHero;
