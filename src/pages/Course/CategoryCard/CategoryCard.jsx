import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { FaRegEye, FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CategoryCard = ({course}) => {
    return (
        <Col lg={4} md={6} className='mt-3'>
            <Card style={{boxShadow:"0px 0px 5px"}}>
                <Card.Img className='mx-auto mt-3 rounded' style={{height:"380px",width:"90%"}} variant="top" src={course.image} />
                <div className='d-flex justify-content-between mx-auto mt-3' style={{width:"90%"}}>
                    <div className='d-flex'>
                        <FaRegStar style={{fontSize:"25px"}}/>
                        <h5 className='ms-2'>{course.rating}</h5>
                    </div>
                    <div className='d-flex'>
                        <FaRegEye style={{fontSize:"25px"}}/>
                        <h5 className='ms-2'>{course.sold}</h5>  
                    </div>
                </div>
                <hr className='mx-auto' style={{width:"90%"}}></hr>
                <Card.Body>
                    <Card.Title>{course.course_name}</Card.Title>
                    <Card.Text>
                        Some quick example and descriptipn of the course. Also the rating, viewed status are shown in the body.
                    </Card.Text>
                    <Link><Button variant="primary">Buy Now ${course.price}</Button></Link>
                    <div>

                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default CategoryCard;