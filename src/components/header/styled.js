import styled from "styled-components";

export const HeaderWrapper = styled.header`
  background-color: #052541;
  height: 4rem;
  position: fixed;
  display: grid;
  width: 100%;
  z-index: 1000;

  top: ${(props) => (props.$isVisible ? "0" : "-100%")};
  transition: top 0.7s ease;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.375rem;

  @media (min-width: 48rem) {
    display: none;
    padding: 0 1.875rem;
  }
`;

export const HeaderMenu = styled.div`
  display: flex;
  align-items: center;
`;

export const MenuLink = styled.a`
  width: 1.4rem;
  height: 1.4rem;
`;

export const HeaderLogo = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 6.67rem;
  height: 2.5rem;
`;

export const HeaderLink = styled.a`
  width: 3.44rem;
  height: 2.5rem;
`;

export const HeaderProfileLink = styled.a`
  width: 1.34rem;
  height: 1.34rem;
`;

export const HeaderSearchLink = styled.a`
  width: 1.54rem;
  height: 1.54rem;
`;

export const HeaderDesktopContainer = styled.div`
  display: none;
  @media (min-width: 48rem) {
    display: flex;
    justify-content: space-between;
    max-width: 87.5rem;
    margin: 0 auto;
    width: 100%;
    padding: 0 2.5rem;
  }
`;

export const HeaderLeft = styled.div`
  @media (min-width: 48rem) {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    gap: 0.625rem;
  }
`;

export const HeaderDesktopLogo = styled.a`
  @media (min-width: 48rem) {
    width: 9.625rem;
    height: 1.25rem;
    margin-right: 1rem;
    cursor: pointer;

    img {
      width: 100%;
      height: auto;
    }
  }
`;

export const HeaderDesktopMenu = styled.div`
  @media (min-width: 48rem) {
    display: flex;
    gap: 1.5rem;
  }
`;

export const MenuDesktopLink = styled.a`
  @media (min-width: 48rem) {
    color: #fff;
    text-decoration: none;
    font-size: 1rem;
  }
`;

export const HeaderRight = styled.div`
  @media (min-width: 48rem) {
    display: flex;
    align-items: center;
    gap: 1.75rem;
    color: #fff;
  }
`;

export const PlusLogo = styled.div`
  @media (min-width: 48rem) {
    width: 1.3994rem;
    height: 1.3994rem;
    cursor: pointer;

    img {
      width: 100%;
      height: auto;
    }
  }
`;

export const Lang = styled.div`
  @media (min-width: 48rem) {
    border: 0.0625rem solid #fff;
    width: 1.75rem;
    height: 1.625rem;
    border-radius: 0.3125rem;
    padding: 0.1875rem 0.1875rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
      background: #fff;
      color: #222;
    }
  }
`;

export const Notification = styled.div`
  display: flex;
  align-items: center;

  img {
    cursor: pointer;
  }
`;

export const Login = styled.div`
  @media (min-width: 48rem) {
    cursor: pointer;
    width: 2rem;
    height: 2rem;
    background-color: #01b4e4;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const Join = styled.div`
  cursor: pointer;
`;

export const Search = styled.div`
  cursor: pointer;
  z-index: 999;
  position: sticky;
  top: 0;

  @media (min-width: 48rem) {
    width: 1.82rem;
    height: 1.82rem;
  }
`;
