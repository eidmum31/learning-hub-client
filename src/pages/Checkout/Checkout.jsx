import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CheckoutCard from './CheckoutCard/CheckoutCard';

const Checkout = () => {
    const coursesString = localStorage.getItem('courses');
    let Courses = JSON.parse(coursesString);
    const [courses, setCourses] = useState(Courses);
    const deleteCourse = (course) => {

        const newCourses = courses.filter(x => x.id != course.id);
        console.log(newCourses);
        setCourses([...newCourses]);
        localStorage.setItem('courses', JSON.stringify(newCourses));
    }

    console.log(courses.length);

    return (

        <Container style={{ marginTop: "120px" }}>
            <Row>
                <Col md={8}>
                    {
                        courses.map(course => <CheckoutCard deleteCourse={deleteCourse} course={course} key={course.id}></CheckoutCard>)

                    }
                </Col>
                <Col md={4}>

                </Col>
            </Row>

        </Container>
    );
};

export default Checkout;