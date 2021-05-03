import styled from "styled-components";

export const CaseContainer = styled.section`
  height: auto;
  min-width: 100%;
  h1 {
    font-size: clamp(3rem, 3rem, 8vw);
    margin: 2rem;
    @media screen and (max-width: 768px) {
      font-size: 2rem;
    }
    @media screen and (max-width: 1024px) {
      text-align: center;
    }
  }
  margin: 4rem 0;
`;

export const CaseWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;
  width: 100%;
  margin: 2rem;
  grid-gap: 20px;
  justify-items: center;
  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    margin: 0;
  }
`;

export const CaseImage = styled.img`
  width: 600px;
  height: 600px;
  object-fit: cover;
  @media screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;

export const CaseCaption = styled.h2`
  margin: 2rem 0;
  line-height: 1.4;
  font-weight: 400;
  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const Item = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: 2rem;
  align-items: center;
  @media screen and (min-width: 1025px) {
    align-self: ${({ align }) => align};
    justify-self: ${({ justify }) => justify};
  }
`;
