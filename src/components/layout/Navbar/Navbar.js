import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import {
  Logo,
  MenuBars,
  Nav,
  NavMenu,
  NavLinks,
  ADVO,
  NavbarContainer,
  MobileIcon,
  NavItem,
  NavBtn,
} from "./NavbarElements";
import { Button } from "../Button";
import MenuData from "../../../Data/MenuData";
const Navbar = ({ toggle }) => {
  const [isNavbr, setIsNavbr] = useState(false);

  const setNavbar = () => setIsNavbr(window.scrollY >= 80 && true);

  useEffect(() => {
    window.addEventListener("scroll", setNavbar);
    return () => {
      window.removeEventListener("scroll", setNavbar);
    };
  }, []);
  return (
    <Nav isNavbr={isNavbr}>
      <NavbarContainer>
        <Logo to='/'>
          ADVO
          <ADVO />
        </Logo>
        <MobileIcon onClick={toggle}>
          <FaBars color='white' />
        </MobileIcon>
        <MenuBars />
        <NavMenu>
          {MenuData.map((item, index) => (
            <NavItem key={index}>
              <NavLinks to={item.link}>{item.title}</NavLinks>
            </NavItem>
          ))}
        </NavMenu>
        <NavBtn>
          <Button rounded='true' to='/contact'>
            contact us
          </Button>
        </NavBtn>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
