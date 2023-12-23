import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup, Card, Col, Container, Row } from 'react-bootstrap';

import { FaRegEye, FaRegStar } from 'react-icons/fa6';
import { Link, useLoaderData } from 'react-router-dom';

const Checkout = () => {

    const course = useLoaderData();




    return (

        <Container style={{ marginTop: "120px" }}>



            <Card className='w-50 mx-auto my-auto ' style={{boxShadow:"0 0 10px gray"}}>
                <Card.Img variant="top" src={course.image}/>
                <Card.Body>
                    <Card.Title>{course.course_name}</Card.Title>
                    <Card.Text>
                        {course.details}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className='d-flex justify-content-between my-auto'>
                    <div className="text-muted d-flex">
                        <img style={{width:"40px", height:"40px",borderRadius:"10px"}} src={course.author.image}></img>
                        <h5 className='ms-3'>{course.author.name}</h5>
                    </div>
            
                    <div className=''>
                        <h5>${course.price}</h5>
                    </div>
                </Card.Footer>
                <hr></hr>
                <Button className='m-3' style={{width:"95%"}}  variant="primary">Pay Now</Button>
            </Card>
            




        </Container>
    );
};

export default Checkout;