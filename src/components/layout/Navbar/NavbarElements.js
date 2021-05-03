import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { GiSailboat } from "react-icons/gi";
export const Nav = styled.nav`
  height: ${({ isNavbr }) => (isNavbr ? "80px" : "70px")};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: fixed;
  top: 0;
  z-index: 1000;
  background: ${({ isNavbr }) => (isNavbr ? "#401611" : "transparent")};
  transition: all 0.5s ease;
`;
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  padding: 0 24px;
  min-width: 80%;
  align-items: center;
`;
export const Logo = styled(LinkR)`
  color: #fff;
  font-style: italic;
  line-height: 1.5;
  text-decoration: none;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: bold;
  margint-left: 24px;
`;
export const MenuBars = styled.div``;
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavItem = styled.li`
  height: 80px;
`;
export const NavLinks = styled(LinkR)`
  color: #fff;
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #eee;
  }
  &:focus {
    border-bottom: 3px solid red;
  }
`;
export const ADVO = styled(GiSailboat)`
  margin-left: 0.5rem;
  transform: scale(1.5);
  font-style: italic;
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
export const NavBtn = styled.div`
  display: block;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
