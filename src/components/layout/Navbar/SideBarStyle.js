import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { GiSailboat } from "react-icons/gi";
export const DropDownContainer = styled.div`
  position: fixed;
  z-index: 1001;
  width: 100%;
  height: 100%;
  background: #cd853f;
  display: none;
  align-items: center;
  justify-content: center;
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  left: 0;
  transition: all 0.2s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  @media screen and (max-width: 768px) {
    display: grid;
  }
`;

export const DropDownWrapper = styled.div``;

export const DropDownMenu = styled.div`
  display: grid;
  grid-template-columns: repeat(4fr, 800px);
  grid-template-rows: repeat(4, 80px);
  text-align: center;
  margin-bottom: 2rem;
  @media screen and (max-width: 576px) {
    grid-template-rows: repeat(4, 68px);
  }
`;

export const DropDownLink = styled(Link)`
  display: flex;
  color: #fff;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 1.5rem;
  list-style: none;
  color: #fff;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #000d1a;
  }
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const CloseIcon = styled(FaTimes)``;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;
export const Logo = styled(GiSailboat)`
  transform: scale(2);
`;
