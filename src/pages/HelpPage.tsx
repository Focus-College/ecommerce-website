import React from 'react';
import ContactInformation from '../components/Help/ContactInformation';
import HorizontalProductList from '../components/ProductList/HorizontalProductList';
import Faq from '../components/Help/Faq';
import MainLayout from '../layouts/MainLayout';

export default function HelpPage( props:{} ){

    return <MainLayout>

        <ContactInformation />

        <Faq />

        <HorizontalProductList rows ={1} />
    </MainLayout>;

}