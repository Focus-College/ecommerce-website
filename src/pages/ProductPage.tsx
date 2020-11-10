import React from 'react'
import MainLayout from '../layouts/MainLayout';
import Product from '../components/ProductList/Product';
import { IProduct } from '../components/ProductList/HorizontalProductList';
import HorizontalProductList from '../components/ProductList/HorizontalProductList';
import Images from '../images';
import { getValueFromDenormalizedStringPath } from '../helpers/getValueFromDenormalizedStringPath';
import { Col, Container, Row, Tab, Tabs } from 'react-bootstrap';

export default function ProductPage( props:IProduct ){

    return <MainLayout>
        <section id="single-product-informtaion">
            {/* This div will be for the Image/Rating/Price */}
            <div>  
            </div>

            {/* This div will be for the Title, Add to Wishlist, Add to Cart, Product Description */}
            <div>

            </div>
        </section>

        <div className="questions-and-reviews">

        <Tabs defaultActiveKey="reviews" id="review-qa-tab">
            <Tab eventKey="reviews" title="Reviews">
                <section className="reviews-Section">

                </section>
            </Tab>
            <Tab eventKey="QaA" title="Questions and Answers">
                <section>
                <Container className="qAnda-container">
                    <Row >
                        <Col className="title-text" xs={2}>Question: </Col>
                        <Col className="qAnda-text">Is it really useful for sunburn?</Col>
                    </Row>
                    <hr/>
                    <Row>
                        <Col className="title-text" xs={2}>Answer: </Col>
                        <Col className="qAnda-text">Yes, it is useful for minor sunburns such as heat and 
                        redness of the skin. It can soothe the skin. If the sunburn 
                        is severe and peeling, it may not be suitable. Hope it helps you.
                        </Col>
                    </Row>

                </Container>
                
                </section>
            </Tab>
        </Tabs>

        </div>

        <section>
        <h2>Suggested Products</h2>
        <HorizontalProductList rows={1} />

        </section>
    </MainLayout>;

}