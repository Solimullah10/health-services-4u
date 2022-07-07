import React from 'react';
import { Container, Nav, Navbar, } from 'react-bootstrap';
import logo from '../../../src/images/logo/logo.png'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/"><img width={150} className='rounded' src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className='text-uppercase text-white' href="home ">Home</Nav.Link>
                        <Nav.Link className='text-uppercase text-white' href="services ">Services</Nav.Link>
                        <Nav.Link className='text-uppercase text-white' href="blog">Blog</Nav.Link>
                        <Nav.Link className='text-uppercase text-white' href="about">About </Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link className='text-uppercase text-white' href="signup">Sign UP</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;