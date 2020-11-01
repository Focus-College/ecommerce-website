import { atom, selector } from 'recoil';
import { IProduct } from './HorizontalProductList';

import productsList from '../../data/products.json';

export const productListState = atom({
    key: 'productList',
    default: productsList as IProduct[]
});

export const categoriesState = selector({
    key: 'categories',
    get: ({ get }) => {

        // Turn This:
        // [ ['health], ['health','mens-health'], ['sports'], ['tech','sports'] ]

        // Into This:
        // [ 'health', 'health', 'mens-health', 'sports', 'tech', 'sports' ]
        return get(productListState).map( product => product.categories ).reduce(( flatCats, productCategories ) => {
            return flatCats.concat( productCategories );
        }, []).filter(( category:string, index:number, categories:string[] ) => {
            return categories.indexOf(category) === index;
        });

    }
})

export const brandsState = selector({
    key: 'brands',
    get: ({ get }) => {

        // Turn This:
        // [ ['health], ['health','mens-health'], ['sports'], ['tech','sports'] ]

        // Into This:
        // [ 'health', 'health', 'mens-health', 'sports', 'tech', 'sports' ]
        return get(productListState).map( product => product.brand ).filter(( brand:string, index:number, brands:string[] ) => {
            return brands.indexOf(brand) === index;
        });

    }
})