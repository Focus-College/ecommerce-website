import React from 'react'
import { Button, Image, Table } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useRecoilState } from 'recoil';
import { getValueFromDenormalizedStringPath } from '../../helpers/getValueFromDenormalizedStringPath';
import MainLayout from '../../layouts/MainLayout';
import { cartState } from './cart.recoil';
import './style.scss';
import Images from '../../images';

export default function Homepage( props:{} ){
    
    const [ cart, setCart ] = useRecoilState(cartState);

    return <MainLayout>
        <h1>Shopping Cart Page</h1>

        <Table className="checkout-table">
            <thead>
                <tr>
                    <th></th>
                    <th>Product</th>
                    <th className="money">Price</th>
                    <th className="qty">Qty</th>
                    <th className="money">Total</th>
                </tr>
            </thead>
            <tbody>
                { cart.map( item => (
                    <tr>
                        <td>
                            { item.product.image && <Image src={getValueFromDenormalizedStringPath(Images, item.product.image)} /> }
                        </td>
                        <td className="product">
                            {item.product.name}<br/>
                            {item.product.description}
                        </td>
                        <td className="money">$ {item.product.price}</td>
                        <td className="qty">{item.qty}</td>
                        <td className="money">$ 4.99</td>
                    </tr>
                ))}
            </tbody>
            <tbody>
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
                        <LinkContainer to="/cart/checkout">
                            <Button variant="warning" block>Proceed to Checkout</Button>
                        </LinkContainer>

                    </td>
                </tr>
            </tbody>
        </Table>
    </MainLayout>;

}