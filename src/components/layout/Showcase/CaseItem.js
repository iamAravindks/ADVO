import React from "react";
import { CaseImage, CaseCaption, Item } from "./ShowCaseStyle";
import { Button } from "../Button";
const CaseItem = ({ Data }) => {
  const { imgSrc, alt, caption, align, justify } = Data;
  return (
    <Item align={align} justify={justify}>
      <CaseImage src={imgSrc} alt={alt} />
      <CaseCaption>{caption}</CaseCaption>
      <Button to='/spots'>View Details</Button>
    </Item>
  );
};

export default CaseItem;
