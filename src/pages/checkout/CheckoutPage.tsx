import React from 'react'
import { Route, Switch } from 'react-router';
import CheckoutSuccess from './CheckoutSuccessPage';
import CheckoutFailure from './CheckoutFailedPage';
import { Link } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout';

export default function CheckoutPage( props:{} ){

<<<<<<< HEAD
    return <>
        <MainLayout>
            <Switch>
                <Route path="/cart/checkout/success" component={CheckoutSuccess}/>
                <Route path="/cart/checkout/failure" component={CheckoutFailure}/>
                <Route path="/cart/checkout">
=======
    return <MainLayout>
        <Switch>
            <Route path="/cart/checkout/success" component={CheckoutSuccess}/>
            <Route path="/cart/checkout/failure" component={CheckoutFailure}/>
            <Route path="/cart/checkout">

                <h1>Checkout Page</h1>
                <Link to="/cart/checkout/success">Success</Link>
                <Link to="/cart/checkout/failure">Failed</Link>

            </Route>
        </Switch>
>>>>>>> 35cbc66e9e61a00da6a8615fd1a5df631441d9c1

                    <h1>Checkout Page</h1>
                    <Link to="/cart/checkout/success">Success</Link>
                    <Link to="/cart/checkout/failure">Failed</Link>

<<<<<<< HEAD
                </Route>
            </Switch>
        </MainLayout>
    </>;
=======
    </MainLayout>;

>>>>>>> 35cbc66e9e61a00da6a8615fd1a5df631441d9c1
}