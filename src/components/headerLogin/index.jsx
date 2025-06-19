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
  const [open, setOpen] = useState(false);

  return (
    <Wrapper>
      <ProfileButton onClick={() => setOpen(!open)}>S</ProfileButton>

      {open && (
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
