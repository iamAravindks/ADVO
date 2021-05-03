import React from "react";
import { InfoDataOne, InfoDataTwo } from "../../Data/InfoData";
import { SliderData } from "../../Data/SliderData";
import Hero from "../layout/Slider/Hero";
import Info from "../layout/Info/Info";
import ShowCase from "../layout/Showcase/ShowCase";

const Home = () => {
  return (
    <>
      <Hero slides={SliderData} />
      <Info {...InfoDataOne} />
      <ShowCase />
      <Info {...InfoDataTwo} />
    </>
  );
};

export default Home;
