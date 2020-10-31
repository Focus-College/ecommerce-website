import React, { useState } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ShoppingCart from './pages/ShoppingCartPage';
import Wishlist from './pages/WishlistPage';
import Help from './pages/HelpPage';
import Checkout from './pages/checkout/CheckoutPage';
import './App.scss';
import Images from './images';
import { Button } from 'react-bootstrap';

export default function EcommerceWebsite( props:{} ){

    const [ isDarkMode, setDarkMode ] = useState<boolean>( window.localStorage.getItem('darkMode') === 'true' );

    const toggleDarkMode = () => {
        setDarkMode(!isDarkMode);
        window.localStorage.setItem('darkMode', (!isDarkMode).toString());
    }

    return (
        <div className={`ecommerce ${isDarkMode && "dark"}`}>
            { !isDarkMode && <Button onClick={toggleDarkMode}>Dark Mode</Button> }
            { isDarkMode && <Button onClick={toggleDarkMode}>Light Mode</Button> }
            
           <BrowserRouter>

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