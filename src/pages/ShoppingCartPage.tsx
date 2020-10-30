import React from 'react'
import { Link } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout';

export default function Homepage( props:{} ){

<<<<<<< HEAD
    return <>
        <MainLayout><h1>Shopping Cart Page</h1></MainLayout>
=======
    return <MainLayout>
        <h1>Shopping Cart Page</h1>
>>>>>>> 35cbc66e9e61a00da6a8615fd1a5df631441d9c1
        <Link to="/cart/checkout">Checkout</Link>
    </MainLayout>;

}