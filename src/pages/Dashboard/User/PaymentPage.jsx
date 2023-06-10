import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PaymentPage = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div>
            this payment page for 
        </div>
    );
};

export default PaymentPage;