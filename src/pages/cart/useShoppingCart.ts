import { cartState, ICartEntry } from '../../pages/cart/cart.recoil';
import { useRecoilState } from 'recoil';
import { IProduct } from '../../components/ProductList/HorizontalProductList';

export function useShoppingCart(){

    const [ cart, setCartState ] = useRecoilState(cartState);
    
    const setCart = ( data:ICartEntry[] ) => {
        window.localStorage.setItem('storedCartState', JSON.stringify(data));
        setCartState( data );
    }

    // addToCart
    const addToCart = ( product:IProduct ) => {
        
        if(isInCart( product )){
            return;
        }
        
        const cartEntry = { product, qty: 1 };
        
        setCart([ ...cart, cartEntry ]);

    }

    // is in cart
    const isInCart = ( product:IProduct ) => {
        return !!cart.find( item => item.product.productNo === product.productNo )
    };
    
    return {
        cart,
        setCart,
        setCartState,
        addToCart,
        isInCart,
        itemsInCart: cart.length
    };

}