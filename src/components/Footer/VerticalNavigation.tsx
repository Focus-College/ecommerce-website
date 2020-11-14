import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import {  Col, Row, Button } from 'react-bootstrap';

export default function VerticalNavigation(props:{}){

    return <> 
        <div>
            <Row> 
                <Col md={4} sm={4}>
                    <div>
                        <p>
                            <a href="/">Home</a>
                        </p>
                        <p>
                            <a href="/whishlist">Wishlist</a>
                        </p>
                        <p>
                            <a href="/cart">Cart</a>
                        </p>
                        <p>
                            <a href="/help">Help</a>
                        </p>
                    </div>  
                </Col>

                <Col md={6} sm={4}>
                    <div className="contact">
                        <h6 className="text-uppercase font-weight-bold">Contact</h6>
                        <p>Kelowna, BC V1, CANADA</p>
                        <p>info@example.com</p>
                        <p> + 01 234 567 88 </p>
                        <p>+ 01 234 567 89</p>
                    </div>
                </Col>

                <Col md={2} sm={4}>
                    <LinkContainer to="/help">
                        <Button variant ="outline-warning" block>Help</Button>
                    </LinkContainer>
                </Col>
            </Row>
        </div>
    </>

}