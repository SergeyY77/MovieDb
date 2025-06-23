import { ActDropdown, MenuItem } from "./styled";
import { actionMenuItems } from "./constant";

const ActionDropdown = ({ isOpen }) => {
  if (!isOpen) return null;

  return (
    <ActDropdown>
      {actionMenuItems.map((item, idx) => {
        const Icon = item.icon;
        return (
          <MenuItem key={idx}>
            <Icon />
            <span>{item.label}</span>
          </MenuItem>
        );
      })}
    </ActDropdown>
  );
};

export default ActionDropdown;
