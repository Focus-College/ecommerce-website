import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useRecoilValue } from 'recoil';
import { cartState } from '../pages/cart/cart.recoil';

export default function TopNavigation( props:{} ){

    const cart = useRecoilValue(cartState);

    return <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <LinkContainer exact to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
                </Nav>
                <Nav>
                    <LinkContainer to="/wishlist"><Nav.Link>Wishlist</Nav.Link></LinkContainer>
                    <LinkContainer to="/cart" className="ml-2">
                        <Button variant="warning" block>Your Cart has {cart.length} Items</Button>
                    </LinkContainer> 
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </>;

}