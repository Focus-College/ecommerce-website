import { useRecoilState } from "recoil";
import { IProduct } from "../../components/ProductList/HorizontalProductList";
import { wishState, WlistEntry } from "./wishlist.recoil";

export function useWishList(){

    const [ wish, setWishState ] = useRecoilState(wishState);
    
    const setList = ( data:WlistEntry[] ) => {
        window.localStorage.setItem('storedWishState', JSON.stringify(data));
        setWishState( data );
    }

    // adding to the wishing well
    const addToWish = ( product:IProduct ) => {
        
        if(isInWish( product )){
            return;
        }
        
        const cartEntry = { product, qty: 1 };
        
        setList([ ...wish, cartEntry ]);

    }


    // is in wishing well
    const isInWish = ( product:IProduct ) => {
        return !!wish.find( item => item.product.productNo === product.productNo )
    };
    //wish refers to the wishing list.
    
    return {
        wish,
        setList,
        setWishState,
        addToWish,
        isInWish
    };



}