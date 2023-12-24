import React from 'react';
import Header from '../pages/shared/Header/Header';
import Checkout from '../pages/Checkout/Checkout';
import Footer from '../pages/shared/Footer/Footer';

const CheckoutLayout = () => {
    return (
        <div>
            <Header></Header>
            <Checkout></Checkout>
            <Footer></Footer>
        </div>
    );
};

export default CheckoutLayout;