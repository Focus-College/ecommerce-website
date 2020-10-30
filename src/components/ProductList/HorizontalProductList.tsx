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

    
    const innerProductList = [...productsList];
    const rows = [];
    
    while(innerProductList.length)
    {
        rows.push(innerProductList.splice(0,5));
    }

    return <div className="scaffoldHelper">
        
        { props.filter && <ProductFilter /> }

        <CardDeck>
            { row1.map( productData => {
                    return <Product />
            })}
        </CardDeck>
    </div>;


}