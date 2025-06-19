import React from "react";
import { Sidebar, MenuItem } from "./styled";
import { SIDEBAR_DATA } from "./constant";

const SidebarMenu = ({ open }) => {
  return (
    <Sidebar open={open}>
      {SIDEBAR_DATA.map((item, index) => (
        <MenuItem
          key={item.id || index}
          href={item.href}
          $primary={item.primary}
          $logout={item.logout}
          $people={item.people}
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
