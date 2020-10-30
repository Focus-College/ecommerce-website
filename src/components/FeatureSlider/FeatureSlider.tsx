import React from 'react';
import { Carousel } from 'react-bootstrap';
import './style.scss';
import Images from '../../images';

export default function FeatureSlider( props:{}){

    return <Carousel className="featureSlider" controls={false}>
        <Carousel.Item>
            <img className="d-block w-100" src={Images.nivea.feature} alt="Nivea Products"/>
            <Carousel.Caption>
                <h3>Nivea Skin Care Lineup</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img className="d-block w-100" src={Images.sports.feature} alt="Sports Products"/>
            <Carousel.Caption>
                <h3>See Our Sports Equipment</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img className="d-block w-100" src={Images.tech.feature} alt="Tech Gadgets"/>
        
            <Carousel.Caption>
                <h3>Large Selection of Tech Gadgets</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>;

}