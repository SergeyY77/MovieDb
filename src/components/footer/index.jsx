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
  FooterLink,
  FooterLogo,
} from "./styled";
import { useEffect, useState } from "react";
import { headers } from "../../api/constant";

import getAccountData from "../../api";

const Footer = () => {
  return (
    <SiteFooter>
      <FooterNav>
        <FooterJoin>
          <FooterLogo src={footerLogo} alt="Logo footer" />
          <FooterJoinBtn href="#">Hi Sergey1234!</FooterJoinBtn>
        </FooterJoin>

        {FOOTER_SECTIONS.map((section, index) => (
          <FooterSection key={index}>
            <FooterTitle>{section.title}</FooterTitle>
            <FooterList>
              {section.links.map((link, i) => (
                <li key={i}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </FooterList>
          </FooterSection>
        ))}
      </FooterNav>
    </SiteFooter>
  );
};

export default Footer;
