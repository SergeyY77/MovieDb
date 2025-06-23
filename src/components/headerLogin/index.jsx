import React, { useState } from "react";

import {
  Wrapper,
  ProfileButton,
  Dropdown,
  DropdownItem,
  Divider,
} from "./styled";
import { profileMenuItems } from "./constant";

const LoginDropdown = () => {
  const [isOpen, isSetOpen] = useState(false);

  return (
    <Wrapper>
      <ProfileButton onClick={() => isSetOpen(!isOpen)}>S</ProfileButton>

      {isOpen && (
        <Dropdown>
          {profileMenuItems.map((item, idx) =>
            item === "divider" ? (
              <Divider key={idx} />
            ) : (
              <DropdownItem
                href={item.href}
                key={idx}
                $highlight={item.highlight}
                $sub={item.sub}
              >
                {item.label}
              </DropdownItem>
            )
          )}
        </Dropdown>
      )}
    </Wrapper>
  );
};

export default LoginDropdown;
