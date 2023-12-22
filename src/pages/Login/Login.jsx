import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <Container className='text-dark p-5' style={{ marginTop: "116px", border: "2px solid black" }}>
            <h3 className='text-center'>Please Login</h3>
            <Form className='w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email address" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter your password" required/>
                </Form.Group>
                <Button className='w-100' variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <Row className='w-50 mx-auto mt-5'>
                <Col md={6}>
                    <Button style={{ width: "90%" }} variant="outline-secondary"><FaGoogle className='me-2' />Google</Button>
                </Col>
                <Col md={6}>
                    <Button style={{ width: "90%" }} variant="outline-secondary"><FaGithub className='me-2' />Github</Button>
                </Col>
            </Row>
            <p className='text-center mt-3'>Don't have an account? <Link to={`/reg`}>Register</Link></p>
                
            
        </Container>
    );
};

export default Login;