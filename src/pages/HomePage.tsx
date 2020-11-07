import React from 'react'
import MainLayout from '../layouts/MainLayout';
import FeatureSlider from '../components/FeatureSlider/FeatureSlider';
import HorizontalProductList from '../components/ProductList/HorizontalProductList';

export default function HomePage( props:{} ){

    return <MainLayout>
        
        <FeatureSlider />

        <HorizontalProductList title="Clearance Products" clearancePrice />

        <HorizontalProductList filter rows={2} />

    </MainLayout>;

}