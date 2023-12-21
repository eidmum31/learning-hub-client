import React from 'react';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import learning from "../../../assets/learning.png";
import { Link } from 'react-router-dom';
const Header = () => {
    return (
       
            <Navbar className='container' collapseOnSelect expand="lg" fixed='top'  data-bs-theme="dark" bg='dark'>
                <Container>
                    <Navbar.Brand href="#home" className='mx-auto d-flex align-items-center' style={{height:"100px",fontSize:"25px"}}>
                        
                        <img style={{height:"50px",}} src={learning}>
                        </img>
                        Learning Hub 
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className='' style={{fontSize:"25px"}}>
                            <Link to={'/'} className='text-decoration-none ms-lg-5 text-light'>Home</Link>
                            <Link to={'/category/0'} className='text-decoration-none ms-lg-3 text-light'>Courses</Link>
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