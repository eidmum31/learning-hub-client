import React, { useRef } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { FaClock, FaEye, FaRegStar, FaPlay, FaBook, FaFacebook, FaLinkedinIn, FaRedditAlien } from 'react-icons/fa';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { FaComputer, FaSquareTwitter, FaSquareWhatsapp, FaSquareYoutube } from "react-icons/fa6";
import generatePDF from 'react-to-pdf';
const Details = () => {
    const specificCourse = useLoaderData();
    
    console.log(specificCourse);
    const targetRef = useRef();

    return (
        
        <Container ref={targetRef} style={{ marginTop: "115px" }}>
            <Row className='bg-secondary text-light p-4'>
                <Col lg={7}>
                    
                       <h2>{specificCourse.course_name}</h2>
                      
                    
                    <h5 className=''>{specificCourse.details}</h5>
                    <div className='d-flex'>
                        <div className='d-flex align-items-center me-2'>
                            <FaRegStar style={{ fontSize: "15px" }} />
                            <span className='ms-3'>{specificCourse.rating}</span>
                        </div>
                        <div className='d-flex align-items-center mx-3'>
                            <FaEye style={{ fontSize: "15px" }} />
                            <span className='ms-2'>Enrolled {specificCourse.sold} </span>
                        </div>
                        <div className='d-flex align-items-center mx-3'>
                            <FaClock style={{ fontSize: "15px" }} />
                            <span className='ms-2'>{specificCourse.duration} Hours</span>
                        </div>
                        <div className='d-flex align-items-center mx-3'>
                            <FaPlay style={{ fontSize: "15px" }} />
                            <span className='ms-2'>{specificCourse.lessons} Lessions</span>
                        </div>
                        <br></br>
                        
                    </div>
                    <Button className='my-3' onClick={() => generatePDF(targetRef, {filename: 'page.pdf'})} variant="light">Download pdf</Button>
                </Col>
                <Col lg={5}>
                    <Card style={{ width: '65%', boxShadow: "0px 0px 10px grey" }}>
                        <Card.Img style={{ width: "95%", margin: "5px auto" }} variant="top" src={specificCourse.image} />
                        <Card.Body>

                            <Card.Title style={{ textAlign: "center", fontSize: "35px", fontWeight: "bold" }}>${specificCourse.price}</Card.Title>
                            <Link to={`/checkout/${specificCourse.id}`}><Button style={{ width: "100%" }} variant="warning">Get Premium Access</Button></Link>

                            <h5 className='mt-4'>This course includes</h5>
                            <p><FaBook className='me-3' /><span> Language - English</span></p>
                            <p><FaComputer className='me-2' style={{ fontSize: "22px" }} /><span> Use on desktop, tablet & mobile</span></p>
                            <p><FaClock className='me-3' style={{ fontSize: "21px" }} /><span>Full lifetime access</span></p>



                        </Card.Body>
                        <Card.Footer>
                            <h6>Share this course</h6>
                            <div className='d-flex justify-content-between' style={{ fontSize: "28px" }}>
                                <FaFacebook />
                                <FaSquareTwitter />
                                <FaSquareWhatsapp />
                                <FaSquareYoutube />
                                <FaLinkedinIn />
                                <FaRedditAlien />
                            </div>
                        </Card.Footer>
                    </Card>

                </Col>

            </Row>

            <div>

            </div>
        </Container>
    );
};

export default Details;