import React from 'react'
import MainLayout from '../layouts/MainLayout';
import { IProduct } from '../components/ProductList/HorizontalProductList';
import HorizontalProductList from '../components/ProductList/HorizontalProductList';
import Images from '../images';
import Reviews_QandA_Tab from '../components/Reviews_QandA/Reviews_QandA_Tab';
import { Rating } from '@material-ui/lab';

export default function ProductPage( props:IProduct ){

    return <MainLayout>
        

        <section id="single-product-info">
                <img src={Images.nivea.products.aloeHydro} alt="Nivea Products"/>
                <div className="ul-about">
                    <h1 className="product-title">Aloe-Hydro</h1>
                    <hr/>
                <ul>
                    <li>
                    Refreshing Moisture – NIVEA Soft is an all-purpose cream providing 
                    intensive hydration for dry skin and a perfect cream for women on the go. 
                    </li>
                    <li>
                    One Size Fits All – Providing light, non-greasy moisture, NIVEA Soft is 
                    an ideal body or face cream for women with all skin types, including sensitive skin.  
                    </li>
                    <li>
                    Quick Absorbing - This NIVEA lotion is an oil-in-water emulsion with Jojoba
                     Oil and Vitamin E, so it absorbs quickly into skin for lasting softness.
                    </li>
                    <li>
                    Easy to Use – Apply moisturizing lotion to body, hands or face. Refreshing
                     dry skin cream spreads easily and is ideal for applying on large areas of the body.
                    </li>


                </ul>
                </div>
            <div className="product-info">
               <div>

              
                <h2>$6.99</h2>
                <Rating name="half-rating" defaultValue={2.5} precision={1} /> 
                </div>
                <hr/>
                <p>NIVEA Soft All-Purpose Moisturizing Cream - provides light, 
                    intensive and refreshing hydration It can feel like an endless quest 
                    to find skincare products that will moisturize dry skin without 
                    leaving behind a layer of grease. But NIVEA Soft offers a simple solution 
                    with its Jojoba Oil and Vitamin E-infused formula. Absorbing quickly 
                    after application, this NIVEA body lotion leaves your skin feeling soft 
                    and supple, regardless of your skin type. And since this all-purpose body 
                    cream can also be used as facial moisturizer or hand lotion, NIVEA Soft provides 
                    a no-stress route to pampering yourself with all-over effective hydration
                </p>

            </div>
 
                        

           
            <div>  
            </div>

            {/* This div will be for the Title, Add to Wishlist, Add to Cart, Product Description */}
            <div>

            </div>
        </section>

    <Reviews_QandA_Tab></Reviews_QandA_Tab>

        <section>
        <h2>Suggested Products</h2>
        <HorizontalProductList rows={1} />

        </section>
    </MainLayout>
}