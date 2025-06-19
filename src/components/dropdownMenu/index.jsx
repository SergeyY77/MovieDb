import {
  MenuWrapper,
  MenuItem,
  MenuLink,
  SubMenu,
  SubMenuItem,
} from "./styled";
import MENU_DATA from "../header/constant";

const DropdownFullMenu = () => {
  return (
    <MenuWrapper>
      {MENU_DATA.map((menu) => (
        <MenuItem key={menu.name}>
          <MenuLink href="#">{menu.name}</MenuLink>
          {menu.subMenu?.length > 0 && (
            <SubMenu className="sub-menu">
              {menu.subMenu.map((item) => (
                <SubMenuItem
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={item.name}
                >
                  {item.name}
                </SubMenuItem>
              ))}
            </SubMenu>
          )}
        </MenuItem>
      ))}
    </MenuWrapper>
  );
};

export default DropdownFullMenu;
