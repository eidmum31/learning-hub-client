import React from 'react';
import Header from '../pages/shared/Header/Header';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../pages/Course/TopNav/TopNav';

import { Outlet } from 'react-router-dom';
import Course from '../pages/Course/Category/Category';
import Banner from '../pages/shared/Banner/Banner';
import TopNav from '../pages/Course/TopNav/TopNav';
import Footer from '../pages/shared/Footer/Footer';

const CourseLayout = () => {
    return (
        
           <>
            <Header></Header>
            <Banner></Banner>
            <TopNav></TopNav>
            <Outlet></Outlet>
            <Footer></Footer>
           
           </>

                
                
            
        
    );
};

export default CourseLayout;