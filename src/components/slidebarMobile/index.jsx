import React from "react";
import { Sidebar, MenuItem } from "./styled";
import { SIDEBAR_DATA } from "./constant";

const SidebarMenu = ({ open }) => {
  return (
    <Sidebar open={open}>
      {SIDEBAR_DATA.map((item, index) => (
        <MenuItem
          key={index}
          href={item.href}
          $primary={item.primary}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.title}
        </MenuItem>
      ))}
    </Sidebar>
  );
};

export default SidebarMenu;
