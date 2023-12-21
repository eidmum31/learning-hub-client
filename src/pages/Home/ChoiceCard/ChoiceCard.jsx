import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ChoiceCard = ({category}) => {
    return (


        <Col md={6} lg={4}>
            <Card className="bg-light mt-3" border="info">
                <Card.Body>
                    <Card.Title>{category.category}</Card.Title>
                   
                    <Card.Text>
                        {category.details}
                    </Card.Text>
                    <Link to={`/category/${category.category_id}`}><Button variant="secondary">View Courses</Button></Link>
                </Card.Body>
            </Card>
        </Col>

    );
};

export default ChoiceCard;