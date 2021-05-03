import React from "react";
import { CaseContainer, CaseWrapper } from "./ShowCaseStyle";
import CaseItem from "./CaseItem";
import { DataOne, DataTwo } from "../../../Data/ShowCase";
const ShowCase = () => {
  return (
    <CaseContainer>
      <h1>View our Top Spots</h1>
      <CaseWrapper>
        <CaseItem Data={DataOne}></CaseItem>
        <CaseItem Data={DataTwo}></CaseItem>
      </CaseWrapper>
    </CaseContainer>
  );
};

export default ShowCase;
