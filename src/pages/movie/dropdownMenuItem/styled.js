import styled from "styled-components";

import { Dropdown } from "../styled";
export const DropdownItem = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #333;
  text-decoration: none;
  font-size: 0.9rem;
  line-height: 1.5rem;
  padding: 0.25rem 3rem 0.25rem 1rem;
  width: 100%;
  white-space: nowrap;
  box-sizing: border-box;
  padding-top: ${(props) => (props.isDivider ? "1.25rem" : ".25rem")};

  &:hover {
    background-color: #f4f4f4;
  }
  &.hovered-nested {
    background-color: #01b4e4;
    color: #fff;
  }
`;

export const ItemLabel = styled.span``;

export const ItemCount = styled.span`
  position: absolute;
  right: 0.5625rem;
  font-weight: 300;
  color: rgba(0, 0, 0, 0.6);
`;

export const VideoImage = styled.img`
  transform: rotate(-90deg);
  position: absolute;
  right: 0.5625rem;
`;

export const VideoSidebar = styled(Dropdown)`
  position: absolute;
  top: 0;
  left: 8rem;
`;

export const VideoSidebarItem = styled(DropdownItem)`
  color: #333;
`;
