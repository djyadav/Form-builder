import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const TemplateSwitcher = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);
  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        Change Template
        </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>
          <Link to="/form/1">Form One</Link>
              <Link to="/form/2">Form Two</Link>
                  <Link to="/form/3">Form Three</Link>
                      <Link to="/form/4">Form Four</Link>
        </DropdownItem>

      </DropdownMenu>
    </Dropdown>
  );
}

export default TemplateSwitcher;
