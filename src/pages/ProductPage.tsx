import React, { useEffect, useState } from 'react'
import MainLayout from '../layouts/MainLayout';
import { IProduct } from '../components/ProductList/HorizontalProductList';
import HorizontalProductList from '../components/ProductList/HorizontalProductList';
import Images from '../images';
import Reviews_QandA_Tab from '../components/Reviews_QandA/Reviews_QandA_Tab';
import { Rating } from '@material-ui/lab';
import { useParams } from 'react-router';
import { productListState } from '../components/ProductList/product.recoil';
import { useRecoilValue } from 'recoil';
import { Button } from 'react-bootstrap';
import { getValueFromDenormalizedStringPath } from '../helpers/getValueFromDenormalizedStringPath';
import { useShoppingCart } from '../pages/cart/useShoppingCart';
import { useWishList } from  '../pages/wishlist/useWishList';

export default function ProductPage(){

    const params = useParams<{ id: string }>();
    const productsList = useRecoilValue<IProduct[]>(productListState);
    const [ product, setProduct ] = useState<IProduct>();

    useEffect(() => {
        setProduct(productsList.find( _product => _product.productNo === params.id ));
    }, [params.id])


    const { isInCart, addToCart } = useShoppingCart();

    const { isInWish, addToWish} = useWishList();


    const clickAddToWishListHandler = () => {
        addToWish( product as IProduct );
    }

    const clickAddToCartHandler = () => {
        addToCart( product as IProduct );
    }

    // guard for empty product value
    if(!product){
        return <MainLayout></MainLayout>;
    }

    if(!product.image){
        return <MainLayout></MainLayout>;
    }

    const productImage = getValueFromDenormalizedStringPath(Images, product.image)
    return <MainLayout>
        

        <section id="single-product-info">
                <img src={productImage} alt="Product Image"/>
                <div className="product-content">
                    <h1 className="product-title">{product.name}</h1>
                    <hr/>
                    <div className="product-buttons">
                        {isInCart(product) || <Button  onClick={clickAddToCartHandler}>Add to Cart</Button>}
                        {isInCart(product) && <Button disabled variant="success">Added to Cart!</Button>}
                        {isInWish(product) || <Button onClick={clickAddToWishListHandler}>Add to Wishlist</Button>}
                        {isInWish(product) && <Button disabled variant="info"> Added to Wishlist!</Button>} 
                    </div>

                <p>
                    {product.description}
                </p>

                </div>
            <div className="product-info">
               <div className="product-PriceAndRating">
                <h2>${product.price}</h2>
                <Rating name="half-rating" defaultValue={2.5} precision={1} /> 
                </div>

    
            </div>
 
        </section>

    <Reviews_QandA_Tab></Reviews_QandA_Tab>

        <section>
        <h2>Suggested Products</h2>
        <HorizontalProductList rows={1} />

        </section>
    </MainLayout>
}