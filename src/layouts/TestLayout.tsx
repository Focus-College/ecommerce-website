import React, { PropsWithChildren } from 'react';
import Images from '../images'
import TopNavigation from '../components/TopNavigation';
import { Col, Container, Row } from 'react-bootstrap';

export default function TestLayout(props:PropsWithChildren<{}>)
{
    return <>
    <Row>
        <Col className="test">
            <img src={Images.nivea.mens.menShavingGel} className="img-small" />
            <p className="pangram">The quick brown fox jumps over the lazy dog</p>
        </Col>
    </Row>
    </>
}