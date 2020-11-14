import React, { MouseEvent } from 'react'
import { cartState, ICartEntry } from '../../pages/cart/cart.recoil';
import { Button, Image, Table } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useRecoilState } from 'recoil';
import { getValueFromDenormalizedStringPath } from '../../helpers/getValueFromDenormalizedStringPath';
import MainLayout from '../../layouts/MainLayout';
import './style.scss';
import Images from '../../images';
export default function Homepage(props:{} ) {
    const shipping = 15.87;
    
    const [ cart, setCart ] = useRecoilState(cartState);

    function onClickAdd(index:number) {
        return function updateItemInCart(event:MouseEvent<HTMLButtonElement>)
        {
            const cartItem = {...cart[index]};
            let fullCart = [...cart]
            cartItem.qty++;
            fullCart[index] = cartItem;
            setCart(fullCart);
            setCartState( fullCart );
        }
    }

    function onClickSubtract(index:number) {
        return function RemoveItemFromCart(event:MouseEvent<HTMLButtonElement>)
        {
            const cartItem = {...cart[index]};
            let fullCart = [...cart]
            if(cartItem.qty > 1)
            {
                 cartItem.qty--;
            }
            fullCart[index] = cartItem;
            setCart(fullCart);
            setCartState( fullCart );
        }
    }

    const setCartState = ( data:ICartEntry[] ) => {
        window.localStorage.setItem('storedCartState', JSON.stringify(data));
        setCart( data );
    }

    function removeFromCart(product:any) {
        const newList = cart.filter((item) => item.product !== product);
        setCartState( newList );
    }

    function subTotal () {
        let totalPrice = 0
        for (let I = 0; I < cart.length; I++ ) {
            totalPrice += Number (cart[I].product.price) * cart[I].qty
        }
        return totalPrice.toFixed(2)
    }

    function totalPrice (){
        let test = Number (subTotal())
        test = test * 1.15 + shipping;
        return test.toFixed(2);
    }

    function setTax (){
        let taxes = Number (subTotal())
        taxes = taxes * 0.15
        return taxes;
    }


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
                { cart.map((item, index) => (
                    <tr>
                        <td>
                            { item.product.image && <Image src={getValueFromDenormalizedStringPath(Images, item.product.image)} /> }
                        </td>
                        <td className="product">
                            {item.product.name}<br/>
                            {item.product.description}
                        </td>
                        <td className="money">$ {item.product.price}</td>
                        <td className="qty">
                            <button className="btnAddQty" onClick={onClickAdd(index)}> + </button> 
                            {item.qty}
                            <button className="btnSubQty" onClick = {onClickSubtract(index)}> - </button> 

                            <div>
                            <button className="btnRemoveItem" type="button" onClick={() => removeFromCart(item.product)}>Remove</button>
                            </div>
                        </td>
                        
                        <td className="money">$ {((item.qty) * Number (item.product.price)).toFixed(2)}</td>
                    </tr>
                ))}
            </tbody>
            <tbody>
                <tr>
                    <td colSpan={2} rowSpan={5}></td>
                    <td colSpan={2}>Subtotal</td>
                    <td className="money">$ {subTotal()}</td>
                </tr>
                <tr>
                    <td colSpan={2}>Shipping</td>
                    <td className="money">$ {shipping}</td>
                </tr>
                <tr>
                    <td colSpan={2}>Taxes</td>
                    <td className="money">$ {setTax().toFixed(2)}</td>
                </tr>
                <tr>
                    <td colSpan={2}>Total</td>
                    <td className="money">$ {totalPrice()}</td>
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