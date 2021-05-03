import React from "react";
import { Navigation, NavHeading, NavItem } from "./FooterStyle";
const FooterNav = ({ Data }) => {
  const { heading, nav } = Data;
  return (
    <Navigation>
      <NavHeading>{heading}</NavHeading>
      {nav.map((item, index) => (
        <NavItem key={index}>{item}</NavItem>
      ))}
    </Navigation>
  );
};

export default FooterNav;
