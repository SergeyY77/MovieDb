import {
  HeaderWrapper,
  HeaderContainer,
  HeaderMenu,
  MenuLink,
  HeaderLogo,
  HeaderLink,
  HeaderDesktopContainer,
  HeaderLeft,
  HeaderDesktopLogo,
  HeaderDesktopMenu,
  HeaderRight,
  PlusLogo,
  Lang,
  Notification,
} from "./styled";
import menuIcon from "../../assets/icons/header-menu.svg";
import headerLogo from "../../assets/icons/header-logo.svg";
import headerPlus from "../../assets/icons/header-desktop-plus.svg";
import headerDesktopLogo from "../../assets/icons/header-desktop-logo.svg";
import headerNotification from "../../assets/icons/header-notification.svg";

import useMobile from "../../hooks/useMobile";
import DropdownFullMenu from "../dropdownMenu";
import LoginDropdown from "../headerLogin";
import SearchToggle from "../headerSearch";
import React, { useState, useEffect, useRef } from "react";

const Header = ({ onMenuClick }) => {
  const isMobile = useMobile();
  const [isVisibleHeader, setIsVisibleHeader] = useState(true);
  const lastY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setIsVisibleHeader(currentY < lastY.current || currentY < 50);
      lastY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <HeaderWrapper $isVisible={isVisibleHeader}>
      {isMobile ? (
        <HeaderContainer>
          <HeaderMenu>
            <MenuLink onClick={onMenuClick}>
              <img src={menuIcon} alt="Menu Icon" />
            </MenuLink>
          </HeaderMenu>
          <HeaderLogo>
            <HeaderLink href="#">
              <img src={headerLogo} alt="Header Logo" />
            </HeaderLink>
          </HeaderLogo>
          <HeaderMenu>
            <img src={headerNotification} alt="notification" />
            <LoginDropdown />
            <SearchToggle isHeaderVisible={isVisibleHeader} />
          </HeaderMenu>
        </HeaderContainer>
      ) : (
        <HeaderDesktopContainer>
          <HeaderLeft>
            <HeaderDesktopLogo href="#">
              <img src={headerDesktopLogo} alt="Desktop Logo" />
            </HeaderDesktopLogo>
            <HeaderDesktopMenu>
              <DropdownFullMenu />
            </HeaderDesktopMenu>
          </HeaderLeft>
          <HeaderRight>
            <PlusLogo>
              <img src={headerPlus} alt="Plus Logo" />
            </PlusLogo>
            <Lang>EN</Lang>
            <Notification>
              <img src={headerNotification} alt="notification" />
            </Notification>
            <LoginDropdown>S</LoginDropdown>

            <SearchToggle isHeaderVisible={isVisibleHeader} />
          </HeaderRight>
        </HeaderDesktopContainer>
      )}
    </HeaderWrapper>
  );
};

export default Header;
