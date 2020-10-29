import React from 'react'
import { Link } from 'react-router-dom'

export default function Homepage( props:{} ){

    return <>
        <h1>Shopping Cart Page</h1>
        <Link to="/cart/checkout">Checkout</Link>
    </>;

}