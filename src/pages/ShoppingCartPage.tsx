<<<<<<< HEAD
import React from 'react'

export default function Homepage( props:{}){
    return <h1>Homepage</h1>;
=======
import React from 'react'
import { Link } from 'react-router-dom'

export default function Homepage( props:{} ){

    return <>
        <h1>Shopping Cart Page</h1>
        <Link to="/cart/checkout">Checkout</Link>
    </>;

>>>>>>> db869affeb914db355159223f46536b611ca6bf5
}