import React from 'react';
import Header from '../pages/shared/Header/Header';
import Banner from '../pages/Home/Banner/Banner';
import Choices from '../pages/Home/Choices/Choices';

const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Choices></Choices>
        </div>
    );
};

export default MainLayout;