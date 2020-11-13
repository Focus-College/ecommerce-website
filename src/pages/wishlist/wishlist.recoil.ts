import { atom, selector } from 'recoil';
import { IProduct } from '../../components/ProductList/HorizontalProductList';

//this needs to be adjusted to be a wishlist thing I think the imports are correct. Names need to be shifted.
    




export interface WlistEntry {
    product: IProduct;
    qty: number;
}


//global state entry one.
export type Wlist = WlistEntry[];

export const wishState = atom({
    key: 'wish',
    default: [] as Wlist
});