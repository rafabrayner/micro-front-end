import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavItem } from 'reactstrap';
import './index.css';

export default function NavBar() {

  return (
    <Navbar color="dark" dark expand="md">
      <Nav>
        <NavItem>
          <Link to="/" className="nav-item">List</Link>
        </NavItem>
        <NavItem>
          <Link to="/create" className="nav-item">Create</Link>
        </NavItem>
      </Nav>
    </Navbar>
  );
}
