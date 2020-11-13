import { getValueFromDenormalizedStringPath } from '../../helpers/getValueFromDenormalizedStringPath';
import Images from '../../images';

import React, { useEffect, useState } from 'react';
import { Badge, Button, Card } from 'react-bootstrap';
import { IProduct } from './HorizontalProductList';
import './style.scss';

import Ribbon from '../CornerRibbon/CornerRibbon';
import { useShoppingCart } from '../../pages/cart/useShoppingCart';

import { useWishList } from '../../pages/wishlist/useWishList';


export default function Product( props:IProduct ){

    const { isInCart, addToCart } = useShoppingCart();
    const [ showClearance, setShowClearance ] = useState( false );
    const { isInWish, addToWish} = useWishList();


    useEffect(() => {
        setShowClearance( props.price.substr(-2,2) === "45" );
    }, []);
    //so it's not purely add to cart. It covers broadly.
    //so the wish list would in my estiation be fit in here.

    const clickAddToCartHandler = () => {
        addToCart( props );
    }


    const clickAddToWishListHandler = () => {
        addToWish( props );
    }

//this is not the end yeks? there is also a shopping list.
//And other possible traces I am
    //I wish this felt le   ss like magic tbh.
    //it works? O_o
//----------------------MENTAL ORGANIZER -----------------------------

    //I was getting really confused was missing (); instead it okay


    
//export default function Product( props:IProduct ){

//I think this is the next step, the images are placed here,
//we need a structure to handle the clicks that mirrors.

//though why does use effect show up here specifically? should wish
//list beintegrated under product?

//wait is this all one function O_O
//is the entire rendered piece rolled into one here O_O
//so it is.

//doesn't matter for product lists? Nor product recoil
    //need a wish list based on shopping cart page




    
    return (
        <Card className="product-list-product ribbon-ctr">
            { showClearance && <Ribbon msg="Clearance" placement="right" /> }
            { props.image && <Card.Img variant="top" src={getValueFromDenormalizedStringPath(Images, props.image)} /> }
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text className="product-description">
                    {props.description}
                </Card.Text>
                
                {isInCart(props) || <Button block onClick={clickAddToCartHandler}>Add to Cart</Button>}
                {isInCart(props) && <Button block disabled variant="success">Added to Cart!</Button>}
                      
                {isInWish(props) || <Button block onClick={clickAddToWishListHandler}>Add to Wishlist</Button>}
                {isInWish(props) && <Button block disabled variant="info"> Added to Wishlist!</Button>}
            
            </Card.Body>


            <Card.Footer>
                <div>
                    {props.categories.map( category => {
                        return <Badge className={`tag-${category}`}>{category}</Badge>
                    })}
                </div>
                <small className="text-muted">Product: {props.productNo}</small>
            </Card.Footer>
        </Card>
    );

}