import {
  DropdownItem,
  ItemCount,
  ItemLabel,
  VideoImage,
  VideoSidebar,
  VideoSidebarItem,
} from "./styled";
import ArrowDownIcon from "../../../assets/icons/main-descending-arrow.svg";

const DropdownMenuItem = ({
  item,
  index,
  parentIndex,
  hoveredItem,
  setHoveredItem,
}) => {
  const hasChildren = Array.isArray(item.children);
  const itemKey = `${parentIndex}-${index}`;
  const isHovered = hoveredItem === itemKey;

  const handleMouseEnter = () => {
    if (hasChildren) setHoveredItem(itemKey);
  };

  const handleMouseLeave = () => {
    if (hasChildren) setHoveredItem(null);
  };

  return (
    <DropdownItem
      isDivider={item.isDivider}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={isHovered ? "hovered-nested" : ""}
    >
      <ItemLabel>{item.label}</ItemLabel>
      {item.count !== undefined && <ItemCount>{item.count}</ItemCount>}
      {hasChildren && <VideoImage src={ArrowDownIcon} alt="arrow" />}

      {isHovered && hasChildren && (
        <VideoSidebar>
          {item.children.map((child, idx) => (
            <VideoSidebarItem key={idx}>
              {child.label}
              {child.count !== undefined && (
                <ItemCount>{child.count}</ItemCount>
              )}
            </VideoSidebarItem>
          ))}
        </VideoSidebar>
      )}
    </DropdownItem>
  );
};

export default DropdownMenuItem;
