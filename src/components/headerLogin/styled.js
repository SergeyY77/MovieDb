import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const ProfileButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;

  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #29abe2;
  color: white;
  font-size: 0.7rem;
  font-weight: 600;

  @media (max-width: 48rem) {
    margin-left: 0.875rem;
  }
`;

const Dropdown = styled.div`
  position: absolute;
  right: -5rem;
  top: 3rem;
  width: 11.125rem;
  background: white;
  border: 0.0625rem solid #ddd;
  box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.1);
  border-radius: 0.375rem;
  padding: 0.5rem 0;
  z-index: 1000;
`;

const DropdownItem = styled.a`
  display: block;
  padding: ${(props) =>
    props.highlight
      ? "0.5rem 1.25rem 0"
      : props.sub
      ? "0 1.25rem 0.75rem"
      : "0.375rem 1.25rem"};
  font-size: ${(props) =>
    props.highlight ? "0.85rem" : props.sub ? "0.7rem" : "0.875rem"};
  font-weight: ${(props) => (props.highlight ? 600 : 600)};
  color: ${(props) =>
    props.highlight ? "#000" : props.sub ? "#888" : "rgba(0, 0, 0, 0.6)"};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background-color: rgba(3, 37, 65, 0.8);
    color: #fff;
  }
`;

const Divider = styled.div`
  border-top: 0.0625rem solid #eee;
  margin: 0.25rem 0;
`;

export { Wrapper, ProfileButton, Dropdown, DropdownItem, Divider };
