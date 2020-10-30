import React from 'react'
import { Link } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout';

export default function Homepage( props:{} ){

    return <MainLayout>
        <h1>Shopping Cart Page</h1>
        <Link to="/cart/checkout">Checkout</Link>
    </MainLayout>;

}