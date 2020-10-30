import React from 'react';
import { CardDeck } from 'react-bootstrap';
import ProductFilter from './ProductFilter';
import Product from './Product';
import productsList from '../../data/products.json';

export default function HorizontalProductList( props:{ 
    filter?:boolean,
    showPagination?:boolean,
    rows?:number
}){

    return <div className="scaffoldHelper">
        
        { props.filter && <ProductFilter /> }

        <CardDeck>
            { productsList.map( productData => {
                return <Product />
            })}
        </CardDeck>

    </div>;


}