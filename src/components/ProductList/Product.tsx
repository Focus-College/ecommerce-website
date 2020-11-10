import { getValueFromDenormalizedStringPath } from '../../helpers/getValueFromDenormalizedStringPath';
import Images from '../../images';

import React, { useEffect, useState } from 'react';
import { Badge, Button, Card } from 'react-bootstrap';
import { IProduct } from './HorizontalProductList';
import './style.scss';

import Ribbon from '../CornerRibbon/CornerRibbon';
import { useShoppingCart } from '../../pages/cart/useShoppingCart';
import { useHistory } from 'react-router';


export default function Product( props:IProduct ){

    const { isInCart, addToCart } = useShoppingCart();
    const [ showClearance, setShowClearance ] = useState( false );

        //used for onclick redirect for product title
    let history = useHistory();
    const redirect = () => {
    history.push("/product")
    }


    useEffect(() => {
        setShowClearance( props.price.substr(-2,2) === "45" );
    }, []);

    const clickAddToCartHandler = () => {
        addToCart( props );
    }

    return (
        <Card className="product-list-product ribbon-ctr">
            { showClearance && <Ribbon msg="Clearance" placement="right" /> }
            { props.image && <Card.Img variant="top" src={getValueFromDenormalizedStringPath(Images, props.image)} /> }
            <Card.Body>
                <Card.Title onClick={redirect}>{props.name}</Card.Title>
                <Card.Text className="product-description">
                    {props.description}
                </Card.Text>
                {isInCart(props) || <Button block onClick={clickAddToCartHandler}>Add to Cart</Button>}
                {isInCart(props) && <Button block disabled variant="success">Added to Cart!</Button>}
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