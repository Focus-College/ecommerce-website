import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ShoppingCart from './pages/cart/ShoppingCartPage';
import Wishlist from './pages/WishlistPage';
import Help from './pages/HelpPage';
import Checkout from './pages/cart/CheckoutPage';
import ProductPage from './pages/ProductPage';
import './App.scss';
import { useShoppingCart } from './pages/cart/useShoppingCart';

export default function EcommerceWebsite( props:{} ){

    const [ isDarkMode, setDarkMode ] = useState<boolean>( window.localStorage.getItem('darkMode') === 'true' );

    const { setCartState } = useShoppingCart();

    useEffect(() => {

        const cartContents = window.localStorage.getItem('storedCartState');
        cartContents && setCartState( JSON.parse( cartContents ));

    }, [])
    

    return (
        <div className={`ecommerce ${isDarkMode && "dark"}`}>
            
            <BrowserRouter>
                <Switch>
                    <Route path="/wishlist" component={Wishlist} />
                    <Route path="/help" component={Help} />
                    <Route path="/product" component={ProductPage} />
                    <Route path="/cart/checkout" component={Checkout} />
                    <Route path="/cart" component={ShoppingCart} />
                    <Route path="/" component={HomePage} />
                </Switch>
            </BrowserRouter>
        </div>
    );

}