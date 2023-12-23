import React, { useContext } from 'react';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import learning from "../../../assets/learning.png";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProviders';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Header = () => {
    const {user,logOut}=useContext(AuthContext);
    
    const handleLogOut=()=>{
        logOut()
        .then()
        .catch()
    }
    
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
                        {user&&<img onMouseOver={()=>toast(`Welcome ${user.displayName}`)} className='me-2' src={user.photoURL} style={{height:"40px",width:"40px",borderRadius:"10px"}}></img>}
                        {
                            user?  <Button onClick={handleLogOut} variant="warning">Log Out</Button>:  <Link to={`/login`}><Button variant="warning">Login</Button></Link>
                        }
                      
                      
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                <ToastContainer />
            </Navbar>
       
    );
};

export default Header;