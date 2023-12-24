import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Details from '../pages/SpecificCourse/Details/Details';
import { Outlet } from 'react-router-dom';
import Header from '../pages/shared/Header/Header';
import Footer from '../pages/shared/Footer/Footer';

const SpecificCourseLayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            
          
        </div>
    );
};

export default SpecificCourseLayout;