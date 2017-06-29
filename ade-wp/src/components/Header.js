import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => (
  <header>
  <Navbar inverse collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="/">React-Bootstrap</a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
      <Nav>
        <LinkContainer activeClassName="active" exact to='/'><NavItem>Home</NavItem></LinkContainer>
        <LinkContainer activeClassName="active"  to='/photos'><NavItem>Photos</NavItem></LinkContainer>
        <LinkContainer activeClassName="active" to='/band'><NavItem>Band</NavItem></LinkContainer>
        <LinkContainer activeClassName="active" to='/gigs'><NavItem>Gigs</NavItem></LinkContainer>
        <LinkContainer activeClassName="active" to='/blog'><NavItem>Blog</NavItem></LinkContainer>
        <LinkContainer activeClassName="active" to='/media'><NavItem>Media</NavItem></LinkContainer>
      </Nav>
  </Navbar.Collapse>
  </Navbar>
  </header>
);

export default Header;
