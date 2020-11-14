import React from 'react'
import { Button, Image, Table } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useRecoilState } from 'recoil';
import { getValueFromDenormalizedStringPath } from '../../helpers/getValueFromDenormalizedStringPath';
import { cartState } from './cart.recoil';
import './style.scss';
import Images from '../../images';
import { isTemplateExpression } from 'typescript';


export default function CheckoutSuccessPage( props:{} ){
    const [ cart, setCart ] = useRecoilState(cartState);
    function getSum(total:number, num:number){ return total + num}
    const subtotal = cart.map( item => +item.product.price * item.qty ).reduce(getSum,0)
    const taxrate = 0.12
    const shipping = 5

        return <>
<h1 className="Success-title">Checkout Success, Thank You</h1>
        <Table className="success-table">
           <h1>Payment Information</h1> 
           <tbody> 
               <tr>
                   <td>Name: </td>
                   <td>Mr.Smith</td>
               </tr>
               <tr>
                   <td>Card Type: Visa </td>
                   <td>Card Data: 4520 0325 4454 8585</td>
               </tr>
               <tr>
                   <td>Total Purchase</td>
                   <td>$ 69.37</td>
               </tr>
           </tbody>
        </Table>
        <h1>Your Receipt</h1>

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
                <td className="money">$ {(+item.product.price*item.qty).toFixed(2)}</td>
            </tr>
        ))}
    </tbody>
    <tbody>
        <tr>
            <td colSpan={2} rowSpan={5}></td>
            <td colSpan={2}>Subtotal</td>
        <td className="money">$ {(subtotal).toFixed(2)}</td>
        </tr>
        <tr>
            <td colSpan={2}>Shipping</td>
        <td className="money">$ {(shipping).toFixed(2)}</td>
        </tr>
        <tr>
            <td colSpan={2}>Taxes</td>
            <td className="money">$ {(subtotal*taxrate).toFixed(2)}</td>
        </tr>
        <tr>
            <td colSpan={2}>Total</td>
            <td className="money">$ {((subtotal*(1+taxrate))+shipping).toFixed(2)}</td>
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