import React from 'react';
import Header from '../pages/shared/Header/Header';

import Choices from '../pages/Home/Choices/Choices';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/Footer/Footer';

const MainLayout = () => {
    
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default MainLayout;