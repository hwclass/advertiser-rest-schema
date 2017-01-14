import React from 'react';
import { Navbar } from 'react-bootstrap';

// style
import './style/index.scss';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { title, version } = this.props;
    return (
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">
              <span className="title">{title}</span>
              <span className="version">{version}</span>
            </a>
          </Navbar.Brand>
        </Navbar.Header>
      </Navbar>
    );
  }
}
