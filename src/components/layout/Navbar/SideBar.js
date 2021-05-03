import React from "react";
import menuData from "../../../Data/MenuData";
import { Button } from "../Button";
import {
  DropDownContainer,
  DropDownWrapper,
  DropDownMenu,
  DropDownLink,
  BtnWrap,
  CloseIcon,
  Icon,
  Logo,
} from "./SideBarStyle";

const SideBar = ({ isOpen, toggle }) => {
  return (
    <DropDownContainer isOpen={isOpen}>
      <Icon>
        <CloseIcon color='white' onClick={toggle} />
      </Icon>
      <DropDownWrapper>
        <DropDownMenu>
          <DropDownLink to='/'>
            <Logo onClick={toggle} />
          </DropDownLink>
          {menuData.map((menu, index) => {
            return (
              <DropDownLink to={menu.link} key={index} onClick={toggle}>
                {menu.title}
              </DropDownLink>
            );
          })}
        </DropDownMenu>
        <BtnWrap>
          <Button
            primary='true'
            rounded='true'
            big='true'
            to='/contact'
            onClick={toggle}
          >
            contact us
          </Button>
        </BtnWrap>
      </DropDownWrapper>
    </DropDownContainer>
  );
};

export default SideBar;
