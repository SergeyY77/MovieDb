import { ActDropdown, MenuItem, MenuLabel } from "./styled";
import { ACTION_MENU_ITEM } from "./constant";

const ActionDropdown = ({ isOpen }) => {
  if (!isOpen) return null;

  return (
    <ActDropdown>
      {ACTION_MENU_ITEM.map((item, idx) => {
        const Icon = item.icon;
        return (
          <MenuItem key={idx}>
            <Icon />
            <MenuLabel>{item.label}</MenuLabel>
          </MenuItem>
        );
      })}
    </ActDropdown>
  );
};

export default ActionDropdown;
