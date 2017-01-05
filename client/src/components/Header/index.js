import React from 'react';
import { Navbar } from 'react-bootstrap';

import './style/index.scss';

const Header = () => {
  return (
    <Navbar inverse>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">
            <span className="title">Schibsted REST Framework</span>
            <span className="version">v 3.1.1</span>
          </a>
        </Navbar.Brand>
      </Navbar.Header>
    </Navbar>
	);
};

export default Header;
