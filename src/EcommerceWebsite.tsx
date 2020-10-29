import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ShoppingCart from './pages/ShoppingCartPage';
import Wishlist from './pages/WishlistPage';
import Help from './pages/HelpPage';
import Checkout from './pages/checkout/CheckoutPage';
import './App.scss';
import Images from './images';

export default function EcommerceWebsite( props:{} ){

    return (
        <div className="ecommerce">
            <BrowserRouter>

                <Link to="/">Home</Link> |
                <Link to="/cart">Shopping Cart</Link> |
                <Link to="/wishlist">Wishlist</Link> |
                <Link to="/help">Help</Link>

                <Switch>
                    <Route path="/wishlist" component={Wishlist} />
                    <Route path="/help" component={Help} />
                    <Route path="/cart/checkout" component={Checkout} />
                    <Route path="/cart" component={ShoppingCart} />
                    <Route path="/" component={HomePage} />
                </Switch>

            </BrowserRouter>
        </div>
    )

}