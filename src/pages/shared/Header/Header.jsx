import React from 'react';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import learning from "../../../assets/learning.png";
import { Link } from 'react-router-dom';
const Header = () => {
    return (
       
            <Navbar className='container' collapseOnSelect expand="lg" fixed='top'  data-bs-theme="dark" bg='dark'>
                <Container>
                    <Navbar.Brand href="#home" className='mx-auto'>
                        
                        <img style={{height:"30px",}} src={learning}>
                        </img>
                        Learning Hub 
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className=''>
                            <Link className='text-decoration-none ms-lg-5 text-light'>Courses</Link>
                            <Link className='text-decoration-none mx-lg-3 text-light'>FAQ</Link>
                            <Link className='text-decoration-none text-light'>Blog</Link>
                        </Nav>
                        <Nav className='ms-auto'>
                        <Button variant="warning">Login</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
       
    );
};

export default Header;