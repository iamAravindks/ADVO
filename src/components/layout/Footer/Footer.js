import React from "react";
import { FaInstagram, FaTwitter, FaFacebook, FaYoutube } from "react-icons/fa";

import {
  FooterContainer,
  FooterWrapper,
  Caption,
  Media,
  Icon,
  Arrow,
  CaptionBox,
  FooterNavBox,
  ChatBox,
} from "./FooterStyle";

import { DataOne, DataTwo } from "../../../Data/FooterData";
import FooterNav from "./FooterNav";
import { Button } from "../Button";
const Footer = () => {
  const Themes = {
    IG: "#8a3ab9",
    FB: "#3b5998",
    Twitter: "##1da1f2",
    YT: "#FF0000",
  };
  return (
    <FooterContainer>
      <FooterWrapper>
        <CaptionBox>
          <Caption>
            Let's explore <br /> your beautiful spot
          </Caption>
        </CaptionBox>
        <FooterNavBox>
          <FooterNav Data={DataOne} />
          <FooterNav Data={DataTwo} />
        </FooterNavBox>
        <Media>
          <Icon>
            <FaInstagram color={Themes.IG} />
          </Icon>
          <Icon>
            <FaFacebook color={Themes.FB} />
          </Icon>
          <Icon>
            <FaTwitter color={Themes.Twitter} />
          </Icon>
          <Icon>
            <FaYoutube color={Themes.YT} />
          </Icon>
        </Media>
        <ChatBox>
          <Button to='./contact' rounded='true' big='true'>
            Let's chat
            <Arrow />
          </Button>
        </ChatBox>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
