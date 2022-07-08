import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import logo from '../../../src/images/logo/logo.png'
import auth from '../../firebase.init';

const Header = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);


    const logOut = () => {
        signOut(auth);
        navigate('/home')
    };
    return (
        <Navbar className='sticky-top' collapseOnSelect expand="lg" bg="dark" variant="dark">
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
                    <Nav>{
                        user ?
                            <Nav.Link onClick={logOut} className='text-uppercase btn btn-warning text-dark' href="home">Sign Out</Nav.Link>
                            :
                            <Nav.Link className='text-uppercase text-white' href="login">Sign UP</Nav.Link>
                    }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;