import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavMenu = () => (
  <Nav className="justify-content-end" activeKey="/">
    <Nav.Item>
      <Nav.Link href="/">
        <Link to="/">Home</Link>
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="/gallery">
        <Link to="/gallery/">Gallery</Link>
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="/projects">
        <Link to="/projects/">Projects</Link>
      </Nav.Link>
    </Nav.Item>
  </Nav>
);

export default NavMenu;
