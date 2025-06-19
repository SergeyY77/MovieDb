import styled from "styled-components";

export const SiteFooter = styled.footer`
  background: #041e42;
  color: #ffffff;
  padding: 2.5rem 1.875rem;

  @media (min-width: 48rem) {
    padding-top: 5rem;
    padding-bottom: 5rem;
    display: flex;
    flex-direction: column;
  }
`;

export const FooterNav = styled.nav`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
  gap: 0.5rem;

  @media (min-width: 48rem) {
    flex-direction: row;
    justify-content: space-between;
    max-width: 87.5rem;
    gap: 2rem;
    margin: 0 auto;
    position: relative;
    flex-wrap: wrap;
  }
`;

export const FooterJoin = styled.div`
  margin-bottom: 2rem;
  width: 13.6875rem;

  @media (min-width: 48rem) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
`;

export const FooterLogo = styled.img`
  display: none;
  width: 8.125rem;
  height: 5.875rem;

  @media (min-width: 48rem) {
    display: block;
    position: absolute;
    top: -1.1875rem;
  }
`;

export const FooterJoinBtn = styled.a`
  display: inline-block;
  background: #ffffff;
  color: #235ea7;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1.23rem;
  padding: 0.75rem 1rem;
  border-radius: 0.375rem;
  text-decoration: none;
  text-transform: none;

  @media (min-width: 48rem) {
    position: absolute;
    bottom: 0;
  }
`;

export const FooterSection = styled.div`
  margin-top: 1rem;
`;

export const FooterTitle = styled.h4`
  font-size: 1.4rem;
  color: #ffffff;
  white-space: nowrap;
  font-weight: 600;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
`;

export const FooterList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    margin-bottom: 0.5rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1.08rem;
  font-weight: 400;

  &:hover {
    color: #ffffff;
    text-decoration: underline;
  }
`;
