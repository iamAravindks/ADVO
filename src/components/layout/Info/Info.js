import React from "react";
import { Button } from "../Button";
import { Section, Container, ColumnLeft, ColumnRight } from "./InfoStyle";

const Info = ({
  heading,
  paragaraphOne,
  paragaraphTwo,
  buttonLabel,
  reverse,
  image,
}) => {
  return (
    <Section>
      <Container>
        <ColumnLeft>
          <h1>{heading}</h1>
          <p>{paragaraphOne}</p>
          <p>{paragaraphTwo}</p>
          <Button to='/spots'>{buttonLabel}</Button>
        </ColumnLeft>
        <ColumnRight reverse={reverse}>
          <img src={image} alt='Spot' />
        </ColumnRight>
      </Container>
    </Section>
  );
};

export default Info;
