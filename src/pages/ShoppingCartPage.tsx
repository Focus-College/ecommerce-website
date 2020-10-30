import React from 'react'
import MainLayout from '../layouts/MainLayout';
import { Link } from 'react-router-dom'

export default function Homepage( props:{} ){

    return <MainLayout>
        <h1>Shopping Cart Page</h1>
        <Link to="/cart/checkout">Checkout</Link>
    </MainLayout>

}