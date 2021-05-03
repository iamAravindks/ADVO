/* eslint-disable react-hooks/exhaustive-deps */

import React, { useState, useEffect } from "react";
import {
  HeroSection,
  HeroWrapper,
  HeroContent,
  HeroImage,
  HeroSlide,
  HeroSlider,
  Arrow,
  SliderButtons,
  NextArrow,
  PrevArrow,
} from "./HeroStyle";
import { Button } from "../Button";

const Hero = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  useEffect(() => {
    let id = setTimeout(
      () =>
        setCurrent((prevState) =>
          prevState === length - 1 ? 0 : prevState + 1
        ),
      3000
    );
    return () => {
      clearTimeout(id);
    };
  }, [current]);
  const nextSlide = () =>
    setCurrent((prevState) => (prevState === length - 1 ? 0 : prevState + 1));

  const prevSlide = () =>
    setCurrent((prevState) => (prevState === 0 ? length - 1 : prevState - 1));

  if (!Array.isArray(slides) || slides.length <= 0) return null;

  return (
    <HeroSection>
      <HeroWrapper>
        {slides.map((slide, index) => {
          return (
            <HeroSlide key={index}>
              {index === current && (
                <HeroSlider isAnimate={index === current && "true"}>
                  <HeroImage src={slide.image} alt={slide.alt} />
                  <HeroContent>
                    <h1>{slide.title}</h1>
                    <p>{slide.price}</p>
                    <Button
                      to={slide.path}
                      css={`
                        max-width: 160px;
                      `}
                    >
                      {slide.label}
                      <Arrow />
                    </Button>
                  </HeroContent>
                </HeroSlider>
              )}
            </HeroSlide>
          );
        })}
        <SliderButtons>
          <PrevArrow onClick={prevSlide} />
          <NextArrow onClick={nextSlide} />
        </SliderButtons>
      </HeroWrapper>
    </HeroSection>
  );
};

export default Hero;
