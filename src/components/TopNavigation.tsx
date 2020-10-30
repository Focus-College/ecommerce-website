import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default function TopNavigation( props:{} ){

    return <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <LinkContainer to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
                    <LinkContainer to="/cart" className="cart"><Nav.Link>Shopping Cart</Nav.Link></LinkContainer>
                    <LinkContainer to="/wishlist"><Nav.Link>Wishlist</Nav.Link></LinkContainer>
                    <LinkContainer to="/help"><Nav.Link>Help</Nav.Link></LinkContainer>
                </Nav>
                <Nav>
                <Nav.Link href="#deets">More deets</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                    Dank memes
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </>;

}