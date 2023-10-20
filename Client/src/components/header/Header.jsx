import { Navbar, Nav, Container } from 'react-bootstrap-v5';
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';

import React from 'react'

const Header = () => {
  return (
    <>
      <header>
        <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
          <Container>
            <Navbar.Brand href='/'>JWT Auth App</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav' />
            <Nav className='ms-auto'>
              <Nav.Link href='/login'> <FaSignInAlt /> Sign In </Nav.Link>
              <Nav.Link href='/register'> <FaSignOutAlt /> Sign Up </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </header>
    </>
  )
}

export default Header