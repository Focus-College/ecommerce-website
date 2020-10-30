import React, { useEffect, useState } from 'react';
import { CardDeck } from 'react-bootstrap';
import ProductFilter from './ProductFilter';
import Product from './Product';
import productsList from '../../data/products.json';

export interface IProduct {
    image?: string;
    productNo: string;
    name: string;
    brand: string;
    price: string;
    categories: string[];
    description: string;
}

export default function HorizontalProductList( props:{ 
    filter?:boolean,
    showPagination?:boolean,
    rows?:number,
    title?:string
}){

    const [ productRows, setProductRows ] = useState<Array<IProduct[]>>([]);

    useEffect(() => {

        const innerProductList = [ ...productsList ];
        const rows = [];

        while( innerProductList.length && rows.length < (props.rows||1) ){
            rows.push( innerProductList.splice(0,4));
        }

        setProductRows( rows );

    }, [ props.rows ]);

    return <div className="horizontal-product-list">
        
        { props.title && <h1>{props.title}</h1>}
        
        { props.filter && <ProductFilter /> }

        { productRows.map( row => {
            return <CardDeck>
                { row.map( productData => {
                    return <Product {...productData} />
                })}
            </CardDeck>;
        })}

    </div>;


}

// rows: []
    // innerProductList: [0,1,2,3,4,5,6,7,8,9,10,11,12];
    // length: 13
    // // --> loop
    // rows[
    //     [0,1,2,3,4]
    // ]
    // innerProductList: [5,6,7,8,9,10,11,12];

    // rows[
    //     [0,1,2,3,4]
    // ]
    // innerProductList: [5,6,7,8,9,10,11,12];
    // length: 8
    // // --> loop
    // rows[
    //     [0,1,2,3,4],
    //     [5,6,7,8,9]
    // ]
    // innerProductList: [10,11,12];

    // rows[
    //     [0,1,2,3,4],
    //     [5,6,7,8,9]
    // ]
    // innerProductList: [10,11,12];
    // length: 3
    // // --> loop
    // rows[
    //     [0,1,2,3,4],
    //     [5,6,7,8,9],
    //     [10,11,12]
    // ]
    // innerProductList: [];

    // rows[
    //     [0,1,2,3,4],
    //     [5,6,7,8,9],
    //     [10,11,12]
    // ]
    // innerProductList: [];
    // length: 0
    // // --> loop condition fails