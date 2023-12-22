import React from 'react';
import Header from '../pages/shared/Header/Header';
import Checkout from '../pages/Checkout/Checkout';

const CheckoutLayout = () => {
    return (
        <div>
            <Header></Header>
            <Checkout></Checkout>
        </div>
    );
};

export default CheckoutLayout;