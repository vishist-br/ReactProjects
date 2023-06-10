import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css'


const NavbarView = () => {
    return(
        <Navbar className='navbar-background'>
        <Container>
          <Navbar.Brand className='navbar-brand'>Text Analyzer</Navbar.Brand>
        </Container>
      </Navbar>
    )
}


export default NavbarView;