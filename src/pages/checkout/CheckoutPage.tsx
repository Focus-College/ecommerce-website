<<<<<<< HEAD
import React from 'react'

export default function Homepage( props:{}){
    return <h1>Homepage</h1>;
=======
import React from 'react'
import { Route, Switch } from 'react-router';
import CheckoutSuccess from './CheckoutSuccessPage';
import CheckoutFailure from './CheckoutFailedPage';
import { Link } from 'react-router-dom';

export default function CheckoutPage( props:{} ){

    return <>
        <Switch>
            <Route path="/cart/checkout/success" component={CheckoutSuccess}/>
            <Route path="/cart/checkout/failure" component={CheckoutFailure}/>
            <Route path="/cart/checkout">

                <h1>Checkout Page</h1>
                <Link to="/cart/checkout/success">Success</Link>
                <Link to="/cart/checkout/failure">Failed</Link>

            </Route>
        </Switch>


    </>;

>>>>>>> db869affeb914db355159223f46536b611ca6bf5
}