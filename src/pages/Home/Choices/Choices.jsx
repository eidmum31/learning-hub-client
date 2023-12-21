import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ChoiceCard from '../ChoiceCard/ChoiceCard';

const Choices = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch("http://127.0.0.1:8080/categories")
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])
    return (
        <Container>
            <h3 className='text-center my-5'>Choice favourite course from top category</h3>

            <Row>
                
                    {
                        categories.map(category => <ChoiceCard key={category.category_id} category={category}></ChoiceCard>)
                    }
                

            </Row>

        </Container>
    );
};

export default Choices;