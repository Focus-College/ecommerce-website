import React from 'react';
<<<<<<< HEAD
import { BrowserRouter, Route } from 'react-router-dom';
import Homepage from "./pages/Homepage";
import './App.css';
import Images from "./images";

export default function App( props:{}){

  return(
    <div className="ecommerce">
      <BrowserRouter>
        <switch>
          <Route path="/" component={Homepage} />
        </switch>
      </BrowserRouter>
    </div>
  )
=======
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

>>>>>>> db869affeb914db355159223f46536b611ca6bf5
}