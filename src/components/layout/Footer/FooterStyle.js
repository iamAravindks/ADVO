import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa";

export const FooterContainer = styled.footer`
  background: #000;
  color: #fff;
  height: 540px;
  width: 100%;
`;

export const FooterWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-areas:
    "CaptionBox CaptionBox FootNavBox"
    " MediaBox   MediaBox   ChatBox";
  @media screen and (max-width: 768px) {
    grid-template-areas:
      "CaptionBox"
      "FootNavBox"
      "MediaBox"
      "ChatBox";
    grid-gap: 20px;
  }
`;
export const Caption = styled.h1`
  font-size: clamp(1rem, 5rem, 5rem);
  word-wrap: break-word;
  margin-left: 2rem;
  @media screen and (max-width: 768px) {
    font-size: clamp(1rem, 2rem, 3rem);
  }
`;

export const Media = styled.div`
  height: 100%;
  width: 100%;
  justify-self: flex-start;
  display: grid;
  grid-area: MediaBox;
  grid-template-columns: repeat(4, 70px);
  align-items: center;
  @media screen and (max-width: 768px) {
    justify-self: center;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
  }
`;

export const Navigation = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const NavHeading = styled.h3`
  width: 100%;
  text-align: left;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const NavItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin: 1.2rem;
  font-size: 1rem;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
  &:hover {
    color: #eee;
  }
`;

export const Icon = styled.div`
  text-align: right;
  transform: scale(1.9);
  max-width: 30px;
  margin-left: 20px;
`;

export const Arrow = styled(FaArrowRight)`
  margin-left: 7px;
`;

export const CaptionBox = styled.div`
  grid-area: CaptionBox;
  width: 100%;
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export const FooterNavBox = styled.div`
  grid-area: FootNavBox;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  @media screen and (max-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const ChatBox = styled.div`
  grid-area: ChatBox;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;
