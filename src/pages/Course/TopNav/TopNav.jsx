import React, { useEffect, useState } from 'react';
import { Button, Container, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TopNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch("http://127.0.0.1:8080/categories")
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])
    return (
        <Container style={{ marginTop: "80px" }}>

            <div className='text-center'>
                {
                    categories.map(category => <Button className='m-2' key={category.category_id} variant="light">{category.category}</Button>)
                }
            </div>

        </Container>
    );
};

export default TopNav;