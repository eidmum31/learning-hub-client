import React from 'react';
import Header from '../pages/shared/Header/Header';

import Choices from '../pages/Home/Choices/Choices';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>

        </div>
    );
};

export default MainLayout;