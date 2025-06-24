import React from "react";
import footerLogo from "../../assets/icons/header-logo.svg";
import { FOOTER_SECTIONS } from "./constant";
import {
  SiteFooter,
  FooterNav,
  FooterJoin,
  FooterJoinBtn,
  FooterSection,
  FooterTitle,
  FooterList,
  FooterItem,
  FooterLink,
  FooterLogo,
} from "./styled";
import { useEffect, useState } from "react";

const Footer = () => {
  return (
    <SiteFooter>
      <FooterNav>
        <FooterJoin>
          <FooterLogo src={footerLogo} alt="Logo footer" />
          <FooterJoinBtn href="#">Hi Sergey1234!</FooterJoinBtn>
        </FooterJoin>

        {FOOTER_SECTIONS.map((section) => (
          <FooterSection key={section.title}>
            <FooterTitle>{section.title}</FooterTitle>
            <FooterList>
              {section.links.map((link) => (
                <FooterItem key={link.href}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </FooterItem>
              ))}
            </FooterList>
          </FooterSection>
        ))}
      </FooterNav>
    </SiteFooter>
  );
};

export default Footer;
