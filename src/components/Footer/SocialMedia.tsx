import React from 'react';
import {  Col, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

import facebook from '../../images/icons/facebook.png';
import google from '../../images/icons/google.png';
import instagram from '../../images/icons/instagram.png';
import linkedin from '../../images/icons/linkedin.png';
import twitter from '../../images/icons/twitter.png';



export default function SocialMedia( props:{} ){

    return <>

    <div>
        <Row>
            <Col xs={1} md={2}>
            
            </Col>
            <Col xs={10} md={8}>
                <ul className="list-unstyled list-inline text-center">
                    <li className="list-inline-item">
                        <a className="btn-floating btn-fb mx-1" href="https://facebook.com/">
                            <Image src={ facebook } rounded  />
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a className="btn-floating btn-fb mx-1" href="https://google.com/">
                            <Image src={ google } rounded  />
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a className="btn-floating btn-fb mx-1" href="https://linkedin.com/">
                            <Image src={ linkedin } rounded  />
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a className="btn-floating btn-fb mx-1" href="https://instagram.com/">
                            <Image src={ instagram } rounded  />
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a className="btn-floating btn-fb mx-1" href="https://twitter.com/">
                            <Image src={ twitter } rounded  />
                        </a>
                    </li>
                </ul>
            </Col>
            <Col xs={1} md={2}>
            
            </Col>
        </Row> 
    </div>

    </>
}