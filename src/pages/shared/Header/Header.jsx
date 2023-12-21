import React from 'react';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import learning from "../../../assets/learning.png";
const Header = () => {
    return (
        <Container className='bg-light rounded'>
            <Navbar collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home" className='mx-auto'>
                        
                        <img style={{height:"30px",}} src={learning}>
                        </img>
                        Learning Hub 
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            <Nav.Link href="#features">Courses</Nav.Link>
                            <Nav.Link href="#pricing">FAQ</Nav.Link>
                            <Nav.Link href="#pricing">Blog</Nav.Link>
                        </Nav>
                        <Nav className='ms-auto'>
                        <Button variant="warning">Login</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;