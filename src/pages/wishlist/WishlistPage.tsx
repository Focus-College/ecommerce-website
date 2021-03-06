import React, {MouseEvent} from 'react'
import { Button, Image, Table } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom'
import { useRecoilState } from 'recoil';
import { getValueFromDenormalizedStringPath } from '../../helpers/getValueFromDenormalizedStringPath';
import MainLayout from '../../layouts/MainLayout';
import { wishState } from './wishlist.recoil';
import './style.scss';
import Images from '../../images';
import Product from '../../components/ProductList/Product'
import {useShoppingCart} from '../cart/useShoppingCart'
import { IProduct } from '../../components/ProductList/HorizontalProductList';

//nightmare comment : so to do a wish list , we need to ref wish recoil
//structure it similarly to the rest of it?
//Start from copy and onward O_o

export default function WishPage( props:IProduct ){
    
    const [ wish, setList ] = useRecoilState(wishState);
    const { isInCart, addToCart } = useShoppingCart();
    
    function clickAddToCartHandler(product:IProduct){
        return function cartAdder(event:MouseEvent<HTMLButtonElement>){
            addToCart( product );
        }
    }

    return <MainLayout>
        <h1>The Wish List</h1>

        <Table className="checkout-table">
            <thead>
                <tr>
                    <th></th>
                    <th>Product</th>
                    <th className="money">Price</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                { wish.map( (item) => (
                    <tr>
                        <td>
                            {item.product.image && <Image src={getValueFromDenormalizedStringPath(Images, item.product.image)} /> }
                        </td>
                        <td className="product">
                            {item.product.name}<br/>
                            {item.product.description}
                        </td>
                        <td className="money">$ {item.product.price}
                        </td>
                        <td>
                        {isInCart(item.product) || <Button block onClick={clickAddToCartHandler(item.product)}>Add to Cart</Button>}
                        {isInCart(item.product) && <Button block disabled variant="success">Added to Cart!</Button>}
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    </MainLayout>;

}


