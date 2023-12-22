import React, { useContext, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

const Reg = () => {
    const { createUser, updateUserProfile, verifyEmail } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const handleRegistration = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoUrl = form.photo.value;
        const password = form.password.value;
        createUser(email, password)
            .then(user => {
                setSuccess(true);
                verifyEmail()
                    .then(() => {
                        console.log("email verification sent");
                        

                    })
                .catch(err=>{
                    setError(err);
                    setSuccess(false);
                    console.log("x");
                })
                updateUserProfile(photoUrl, name)
                    .then(() => {
                        
                        console.log("profile upated");
                    })
                    .catch(err=>{
                        console.log("y");
                        setSuccess(false);
                        setError(err);
                    })


            })
            .catch(err => {
                console.log(err);
                setSuccess(false);
                setError(err);
            })
            form.reset();

    }
    return (
        <div>
            <Container className='text-dark p-5' style={{ marginTop: "116px", height: "100vh", backgroundColor: "rgba(26,188,156,255)" }}>
                <div className='mx-auto  my-auto bg-light' style={{ boxShadow: "0 0 10px grey", width: "60%" }}>
                    <h3 className='text-center pt-4'>Please Register</h3>
                    <Form onSubmit={handleRegistration} className='w-50 mx-auto'>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control name='name' type="text" placeholder="Enter your full name" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPhoto">
                            <Form.Label>Photo Url</Form.Label>
                            <Form.Control name='photo' type="text" placeholder="Enter your photo url" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name='email' type="email" placeholder="Enter your email address" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name='password' type="password" placeholder="Enter your password" required />
                        </Form.Group>
                        <Button className='w-100' variant="primary" type="submit">
                            Register
                        </Button>
                        {success?<p className='text-success mt-3 pb-4'>Successfully created an account</p>:<p className='text-danger mt-3 pb-4'>{error?.message}</p>}
                        
                    </Form>
                    
                    <p className='text-center mt-3 pb-4'>Already have an account? <Link to={`/login`}>Login</Link></p>
                </div>


            </Container>
        </div>
    );
};

export default Reg;