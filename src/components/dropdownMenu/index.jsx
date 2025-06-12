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
      {MENU_DATA.map((menu, index) => (
        <MenuItem key={index}>
          <MenuLink href="#">{menu.name}</MenuLink>
          {menu.subMenu?.length > 0 && (
            <SubMenu className="sub-menu">
              {menu.subMenu.map((item, subIndex) => (
                <SubMenuItem
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={subIndex}
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
