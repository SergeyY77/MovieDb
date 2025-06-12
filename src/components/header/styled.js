import styled from "styled-components";

export const HeaderWrapper = styled.header`
  background-color: #052541;
  height: 4rem;
  position: fixed;
  display: grid;
  width: 100%;
  z-index: 1000;

  top: ${(props) => (props.isVisible ? "0" : "-100%")};
  transition: top 0.7s ease;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.375rem;

  @media (min-width: 768px) {
    display: none;
    padding: 0 1.875rem;
  }
`;

export const HeaderMenu = styled.div`
  display: flex;
  align-items: center;
`;

export const MenuLink = styled.a`
  width: 1.3994rem;
  height: 1.3994rem;
`;

export const HeaderLogo = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 6.6669rem;
  height: 2.5rem;
`;

export const HeaderLink = styled.a`
  width: 3.4375rem;
  height: 2.5rem;
`;

export const HeaderProfileLink = styled.a`
  width: 1.3994rem;
  height: 1.3994rem;
`;

export const HeaderSearchLink = styled.a`
  width: 1.54rem;
  height: 1.54rem;
`;

// ------------------------header-desktop ------------------------

export const HeaderDesktopContainer = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    max-width: 1400px;
    margin: 0 auto;
    width: 100%;
    padding: 0 2.5rem;
  }
`;

export const HeaderLeft = styled.div`
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
  }
`;

export const HeaderDesktopLogo = styled.a`
  @media (min-width: 768px) {
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
  @media (min-width: 768px) {
    display: flex;
    gap: 1.5rem;
  }
`;

export const MenuDesktopLink = styled.a`
  @media (min-width: 768px) {
    color: #fff;
    text-decoration: none;
    font-size: 1rem;
  }
`;

export const HeaderRight = styled.div`
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 1.75rem;
    color: #fff;
  }
`;

export const PlusLogo = styled.div`
  @media (min-width: 768px) {
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
  @media (min-width: 768px) {
    border: 1px solid #fff;
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

export const Login = styled.div`
  @media (min-width: 768px) {
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

  @media (min-width: 768px) {
    width: 1.8188rem;
    height: 1.8188rem;
  }
`;
