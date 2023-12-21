import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import CategoryCard from '../CategoryCard/CategoryCard';

const Category = () => {
    const courses=useLoaderData();
    return (
        <Container style={{paddingLeft:"0px",paddingRight:"0px"}} className='mt-5'>
            <Row >
                {
                    courses.map(x=><CategoryCard key={x.id} course={x}></CategoryCard>)
                }
                
            </Row>
        </Container>
    );
};

export default Category;