import { FaList, FaHeart, FaBookmark, FaStar } from "react-icons/fa";
import { ActDropdown, MenuItem } from "./styled";

export const actionMenuItems = [
  { icon: <FaList />, label: "Add to list" },
  { icon: <FaHeart />, label: "Mark as Favorite" },
  { icon: <FaBookmark />, label: "Add to your Watchlist" },
  { icon: <FaStar />, label: "Your rating" },
];

const ActionDropdown = ({ open }) => {
  if (!open) return null;

  return (
    <ActDropdown>
      {actionMenuItems.map((item, idx) => (
        <MenuItem key={idx}>
          {item.icon}
          <span>{item.label}</span>
        </MenuItem>
      ))}
    </ActDropdown>
  );
};

export default ActionDropdown;
