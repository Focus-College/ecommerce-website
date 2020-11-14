import React from 'react';

import { Container } from 'react-bootstrap';
import './style.scss'

import VerticalNavigation from './VerticalNavigation';
import SocialMedia from './SocialMedia';
import CopyRight from './CopyRight';

export default function Footer (props:{}){

   return <>
                <Container fluid>
                    <VerticalNavigation />
                </Container >
                  
                <Container  className="socialMedia">               
                    <SocialMedia />
                </Container>
                <Container className="copyRight">
                    <CopyRight />
                </Container>
                   
    </>
}