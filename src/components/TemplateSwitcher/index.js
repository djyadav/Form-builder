import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const TemplateSwitcher = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>Change Template</DropdownToggle>
      <DropdownMenu>
        <DropdownItem>
          <Link to="/forms/1">Form One</Link>
        </DropdownItem>
        <DropdownItem>
          <Link to="/forms/2">Form Two</Link>
        </DropdownItem>
        <DropdownItem>
          <Link to="/forms/3">Form Three</Link>
        </DropdownItem>
        <DropdownItem>
          <Link to="/forms/4">Form Four</Link>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default TemplateSwitcher;
