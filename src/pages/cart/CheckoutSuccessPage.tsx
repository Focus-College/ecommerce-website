import React from 'react'
import { Button, Image, Table } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useRecoilState } from 'recoil';
import { getValueFromDenormalizedStringPath } from '../../helpers/getValueFromDenormalizedStringPath';
import { cartState } from './cart.recoil';
import './style.scss';
import Images from '../../images';


export default function CheckoutSuccessPage( props:{} ){
    const [ cart, setCart ] = useRecoilState(cartState);   
        return <>

        <Table>
           <h1>Payment Information</h1> 
           <tbody> 
               <tr>
                   <td>Name: </td>
                   <td>Mr.Smith</td>
               </tr>
               <tr>
                   <td>card type: Visa </td>
                   <td>card Data: 12345678910111213</td>
               </tr>
               <tr>
                   <td>Total Purchase</td>
                   <td>$1000.00</td>
               </tr>
           </tbody>
        </Table>
        <h1>Your receipt</h1>

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
                <LinkContainer to="/" exact>
                    <Button variant="success" block>Thank You</Button>
                </LinkContainer>
            </td>
        </tr>
    </tbody>
</Table>
    </>;

}