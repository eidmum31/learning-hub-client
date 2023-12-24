import React, { useContext, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const { loginUser, user, loading,logOut,googleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const dest = location?.state || `/`;
    const navigate = useNavigate();
    const googleSign=()=>{
        googleSignIn()
        .then(()=>{
            navigate(dest);
        })
        .catch()

    
    }
    const handleLogin = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUser(email, password)
            .then(u => {

                if (u.user.emailVerified) {
                    
                    navigate(dest);
                }
                else {
                    logOut();
                    toast("Please verify your email");
                }


            })
            .catch(err => {
                console.log(err);
                setError(err);
            })

       
            
       
        form.reset();
    }
    return (
        <Container className='text-dark p-5' style={{ marginTop: "116px", height: "100vh", backgroundColor: "rgba(26,188,156,255)" }}>
            <div className='mx-auto my-auto bg-light' style={{ boxShadow: "0 0 10px grey", width: "60%" }}>
                <h3 className='text-center mt-4 pt-4'>Please Login</h3>
                <Form onSubmit={handleLogin} className='w-50 mx-auto'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name='email' type="email" placeholder="Enter your email address" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name='password' type="password" placeholder="Enter your password" required />
                    </Form.Group>
                    <Button className='w-100' variant="primary" type="submit">
                        Login
                    </Button>
                    <p className='text-danger mt-2'>{error?.message}</p>
                </Form>
                <Row className='w-50 mx-auto mt-5'>
                    <Col md={6}>
                        <Button onClick={googleSign} style={{ width: "90%" }} variant="outline-secondary"><FaGoogle className='me-2' />Google</Button>
                    </Col>
                    <Col md={6}>
                        <Button style={{ width: "90%" }} variant="outline-secondary"><FaGithub className='me-2' />Github</Button>
                    </Col>
                </Row>
                <p className='text-center mt-3 pb-3'>Don't have an account? <Link to={`/reg`}>Register</Link></p>
            </div>

            <ToastContainer />
        </Container>
    );
};

export default Login;