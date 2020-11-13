import React from 'react'
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

//nightmare comment : so to do a wish list , we need to ref wish recoil
//structure it similarly to the rest of it?
//Start from copy and onward O_o

export default function WishPage( props:{} ){
    
    const [ wish, setList ] = useRecoilState(wishState);

    return <MainLayout>
        <h1>The Wish List</h1>

        <Table className="checkout-table">
            <thead>
                <tr>
                    <th></th>
                    <th>Product</th>
                    <th className="money">Price</th>
                </tr>
            </thead>
            <tbody>
                { wish.map( item => (
                    <tr>
                        <td>
                            { item.product.image && <Image src={getValueFromDenormalizedStringPath(Images, item.product.image)} /> }
                        </td>
                        <td className="product">
                            {item.product.name}<br/>
                            {item.product.description}
                        </td>
                        <td className="money">$ {item.product.price}
                        </td>
                        <td>
                        {isInCart(props) || <Button block onClick={clickAddToCartHandler}>Add to Cart</Button>}
                        {isInCart(props) && <Button block disabled variant="success">Added to Cart!</Button>}
                        </td>
                    </tr>
                ))}
            </tbody>
      
{/*           <tbody>
                <tr>
                    <td colSpan={2} rowSpan={5}></td>
                    <td colSpan={2}>Subtotal</td>
                    <td className="money">$9.98</td>
                </tr>
                <tr>    
                    <td colSpan={2}>Shipping</td>
                    <td className="money">$1.00</td>
                </tr>
                <tr>
                    <td colSpan={2}>Taxes</td>
                    <td className="money">$2.35</td>
                </tr>
                <tr>
                    <td colSpan={2}>Total</td>
                    <td className="money">$13.33</td>
                </tr>
                <tr>
                    <td colSpan={3}>
                    </td>
                </tr>
            </tbody> 
*/}
        </Table>
    </MainLayout>;

}


