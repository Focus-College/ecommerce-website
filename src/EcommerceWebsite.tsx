import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ShoppingCart from './pages/cart/ShoppingCartPage';
import Help from './pages/HelpPage';
import Checkout from './pages/cart/CheckoutPage';
import './App.scss';
import { useShoppingCart } from './pages/cart/useShoppingCart';

import { useWishList } from './pages/cart/useShoppingCart';
import WishPage from './pages/cart/wishlist.test';


export default function EcommerceWebsite( props:{} ){

    const [ isDarkMode, setDarkMode ] = useState<boolean>( window.localStorage.getItem('darkMode') === 'true' );

    const { setCartState } = useShoppingCart();

    const { setWishState } = useWishList(); 

    useEffect(() => {

        const cartContents = window.localStorage.getItem('storedCartState');
        cartContents && setCartState( JSON.parse( cartContents ));

    }, [])

    useEffect(() => {

        const wishContents = window.localStorage.getItem('storedWishState');
        wishContents && setWishState( JSON.parse( wishContents ));

    }, [])



    return (
        <div className={`ecommerce ${isDarkMode && "dark"}`}>
            
            <BrowserRouter> 
                <Switch>
                    <Route path="/wishlist" component={WishPage} />
                    <Route path="/help" component={Help} />
                    <Route path="/cart/checkout" component={Checkout} />
                    <Route path="/cart" component={ShoppingCart} />
                    <Route path="/" component={HomePage} />
                </Switch>
            </BrowserRouter>
        </div>
    );

}