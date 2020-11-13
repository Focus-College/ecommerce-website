import React from 'react'
import MainLayout from '../layouts/MainLayout';
import Product from '../components/ProductList/Product';
import { IProduct } from '../components/ProductList/HorizontalProductList';
import HorizontalProductList from '../components/ProductList/HorizontalProductList';
import Images from '../images';
import { getValueFromDenormalizedStringPath } from '../helpers/getValueFromDenormalizedStringPath';
import { Col, Container, Row, Tab, Table, Tabs } from 'react-bootstrap';
import Reviews_QandA_Tab from '../components/Reviews_QandA/Reviews_QandA_Tab';
import { Rating } from '@material-ui/lab';

export default function ProductPage( props:IProduct ){

    return <MainLayout>
        <section id="single-product-info">

            <div>
                <img src={Images.nivea.products.aloeHydro} alt="Nivea Products"/> 
            </div>
            <div>
                <h3>Product Title</h3>
                <Rating name="half-rating" defaultValue={2.5} precision={1} /> 
                <hr/>

            </div>
 
                        

           
            <div>  
            </div>

            {/* This div will be for the Title, Add to Wishlist, Add to Cart, Product Description */}
            <div>

            </div>
        </section>

    <Reviews_QandA_Tab></Reviews_QandA_Tab>

        <section>
        <h2>Suggested Products</h2>
        <HorizontalProductList rows={1} />

        </section>
    </MainLayout>
}