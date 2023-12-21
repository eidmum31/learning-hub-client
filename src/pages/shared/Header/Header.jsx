import React from 'react';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import learning from "../../../assets/learning.png";
const Header = () => {
    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" >
                <Container>
                    <Navbar.Brand href="#home" className='mx-auto'>
                        
                        <img style={{height:"30px",}} src={learning}>
                        </img>
                        Learning Hub 
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#features">Courses</Nav.Link>
                            <Nav.Link href="#pricing">FAQ</Nav.Link>
                            <Nav.Link href="#pricing">Blog</Nav.Link>
                        </Nav>
                        <Nav>
                        <Button variant="warning">Login</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;