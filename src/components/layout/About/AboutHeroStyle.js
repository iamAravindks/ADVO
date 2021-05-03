import styled from "styled-components";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 900px;
  overflow: hidden;
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  min-height: 65%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
  @media screen and (min-width: 768px and max-width:) {
  }
`;
export const HeroContent = styled.div`
  position: absolute;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.2) 0%,
    rgba(0, 0, 0, 0.2) 50%,
    rgba(0, 0, 0, 0.6) 100%
  );
  height: 100%;
  width: 100%;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;
`;

export const HeroH1 = styled.h1`
  width: 100%;
  font-size: clamp(3rem, 5rem, 6rem);
  text-align: center;
  margin: 2rem;
  @media screen and (max-width: 768px) {
    font-size: 3rem;
  }
`;

export const HeroP = styled.p`
  font-size: 1.2rem;
  line-height: 1.4;
  font-weight: light;
  @media screen and (max-width: 768px) {
    width: 230px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  @media screen and (max-width: 768px) {
    width: 230px;
    justify-content: flex-start;
  }
`;

export const ArrowLeft = styled(FaArrowLeft)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(FaArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
