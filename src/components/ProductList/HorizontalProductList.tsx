import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

import { productListState } from './product.recoil';

import { CardDeck } from 'react-bootstrap';
import ProductFilter from './ProductFilter';
import Product from './Product';
import { Link } from 'react-router-dom';


export interface IProduct {
    image?: string;
    productNo: string;
    name: string;
    brand: string;
    price: string;
    categories: string[];
    description: string;
}

export interface ISearchFilter {
    name?: string;
    brand?: string;
    category?: string;
}

export default function HorizontalProductList( props:{ 
    filter?:boolean,
    showPagination?:boolean,
    rows?:number,
    title?:string,
    clearancePrice?:boolean,
    salePrice?:boolean
}){

    const productsList = useRecoilValue<IProduct[]>(productListState);
    const [ productRows, setProductRows ] = useState<Array<IProduct[]>>([]);
    const [ searchFilter, setSearchFilter ] = useState<ISearchFilter>({});

    useEffect(() => {

        const innerProductList = [ ...productsList ].filter(( product ) => {

            let found = true;

            //Returns all the clearance items for the clearance area.
            if(props.clearancePrice)
            {
                found = found && product.price.substr(-2,2) === "45";
                return found;
            }

            //Returns all the sale items
            if(props.salePrice)
            {
                found = found && product.price.substr(-2,2) === "99";
                return found;
            }

            //If we're not filtering by name, brand, or category, return all the clearance or sale products.
            if(!searchFilter?.name && !searchFilter.brand && !searchFilter.category)
            {
                     found = found && (product.price.substr(-2,2) === "45" || product.price.substr(-2,2) === "99");
            }
            
            if(searchFilter?.name){
                found = product.name.includes( searchFilter.name );
            }

            if(searchFilter?.brand){
                found = found && product.brand === searchFilter.brand;
            }

            if(searchFilter?.category){
                found = found && product.categories.includes(searchFilter.category);
            }
            
           
            
            return found;

        });
        const rows = [];

        while( innerProductList.length && rows.length < (props.rows||1) ){
            rows.push( innerProductList.splice(0,4));
        }

        setProductRows( rows );

    }, [ props.rows, searchFilter ]);

    return <div className="horizontal-product-list">
        
        { props.title && <h1>{props.title}</h1>}
        
        { props.filter && <ProductFilter searchDispatch={setSearchFilter} /> }

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