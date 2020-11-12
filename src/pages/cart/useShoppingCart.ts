import { cartState, ICartEntry } from '../../pages/cart/cart.recoil';
import { useRecoilState } from 'recoil';
import { useState } from 'react';
import { IProduct } from '../../components/ProductList/HorizontalProductList';

import { wishState, WlistEntry } from '../../pages/cart/wishlist.recoil';


export function useShoppingCart(){

    const [ cart, setCartState ] = useRecoilState(cartState);
    
    const setCart = ( data:ICartEntry[] ) => {
        window.localStorage.setItem('storedCartState', JSON.stringify(data));
        setCartState( data );
    }

    // addToCart
    const addToCart = ( product:IProduct ) => {
        
        if(isInCart( product )){
            return;
        }
        
        const cartEntry = { product, qty: 1 };
        
        setCart([ ...cart, cartEntry ]);

    }


    // is in cart
    const isInCart = ( product:IProduct ) => {
        return !!cart.find( item => item.product.productNo === product.productNo )
    };
    
    return {
        cart,
        setCart,
        setCartState,
        addToCart,
        isInCart,
        itemsInCart: cart.length
    };
}


//this in theory has been adapted to work with a wish
//now I am not sure if there are huge blind sides.
//this could be parsed into a seperate doc.
// Now happening until functionality is verified.
export function useWishList(){

    const [ wish, setWishState ] = useRecoilState(wishState);
    
    const setList = ( data:WlistEntry[] ) => {
        window.localStorage.setItem('storedWishState', JSON.stringify(data));
        setWishState( data );
    }

    // adding to the wishing well
    const addToWish = ( product:IProduct ) => {
        
        if(isInWish( product )){
            return;
        }
        
        const cartEntry = { product, qty: 1 };
        
        setList([ ...wish, cartEntry ]);

    }


    // is in wishing well
    const isInWish = ( product:IProduct ) => {
        return !!wish.find( item => item.product.productNo === product.productNo )
    };
    //wish refers to the wishing list.
    
    return {
        wish,
        setList,
        setWishState,
        addToWish,
        isInWish,
        itemsInCart: wish.length
    };



}

//wishlist goes here - I considered building a composite but idk
//likely very hard.