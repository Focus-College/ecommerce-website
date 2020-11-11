import { atom, selector } from 'recoil';
import { IProduct } from '../../components/ProductList/HorizontalProductList';

export interface IListEntry {
    product: IProduct;
    qty: number;
}

export type IList = IListEntry[];

export const listState = atom({
    key: 'list',
    default: [] as IList
});