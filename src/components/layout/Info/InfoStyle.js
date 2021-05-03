import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  height: 100%;
  transition: all 0.5s ease;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 600px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;
  padding: 1rem 2rem;
  transition: all 0.5s ease;
  order: ${({ reverse }) => (reverse ? "1" : "2")};

  h1 {
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
  }
  p {
    margin-bottom: 2rem;
  }
`;

export const ColumnRight = styled.div`
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? "1" : "2")};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;
  img {
    width: 80%;
    height: 80%;
    object-fit: cover;

    @media screen and (max-width: 768px) {
      width: 300px;
      height: 300px;
    }
  }
`;
