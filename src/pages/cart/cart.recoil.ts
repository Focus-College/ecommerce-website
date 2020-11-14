import React from 'react';
import { atom  } from 'recoil';
import { IProduct } from '../../components/ProductList/HorizontalProductList';

export interface ICartEntry {
    product: IProduct;
    qty: number;
}

export type ICart = ICartEntry[];

export const cartState = atom({
    key: 'cart',
    default: [] as ICart
});


export  interface Icart {
    name: string
    cardnumber : number;
    cvc: number;
    ex_date: Date;

}

