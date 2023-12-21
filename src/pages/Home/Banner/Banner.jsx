import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { FaSearch } from "react-icons/fa";
import banner from "../../../assets/online-course.png";
const Banner = () => {
    return (
        <Container className='bg-secondary p-5 rounded mt-5'>
            <Row>
                <Col md={6} className='w-50 mx-auto'>
                    <h2 >Learn more and make success the result of perfection.</h2>
                    <h4 className='text-light mt-3'>Pick from over 100,000 online video courses with new additions published every month.</h4>
                    <div>
                        <Form className='mt-4'>
                            <Form.Group className="mb-3 mt-3 d-flex" controlId="formBasicEmail">
                                <Form.Control  style={{height:"50px",borderRadius:"0px"}} type="text" placeholder="Search your favourite courses" />
                                <Button style={{borderRadius:"0px"}} variant="danger"><FaSearch /></Button>
                            </Form.Group>
                        </Form>
                    </div>

                </Col>
                <Col md={6} className='d-flex justify-content-center align-items-center'>
                    <img className='w-50'  src={banner} alt="" />
                </Col>
            </Row>
        </Container>
    );
};

export default Banner;