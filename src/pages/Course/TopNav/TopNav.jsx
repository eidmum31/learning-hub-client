import React, { useEffect, useState } from 'react';
import { Button, Container, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TopNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch("https://learninghub-lx16.onrender.com/categories")
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])
    return (
        <Container style={{ marginTop: "80px" }}>

            <div className='text-center'>
                {
                    categories.map(category =><Link className='m-2' key={category.category_id} to={`/category/${category.category_id}`}><Button className='mt-2' variant="secondary">{category.category}</Button></Link> )
                }
            </div>

        </Container>
    );
};

export default TopNav;