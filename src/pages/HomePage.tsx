import React from 'react'
import MainLayout from '../layouts/MainLayout';
import FeatureSlider from '../components/FeatureSilder'

export default function HomePage( props:{} ){

    return <MainLayout>
        <FeatureSlider />
        <h1>HomePage</h1>
    </MainLayout>;

}