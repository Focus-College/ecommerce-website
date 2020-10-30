import React, { PropsWithChildren, useEffect, useState } from 'react';
import TopNavigation from '../components/TopNavigation';
import { Col, Container, Row, Button } from 'react-bootstrap';

interface IClicks {
    clicks: number;
}

export default function MainLayout( props:PropsWithChildren<{}> ){


    return <>
        <Container className="main">
            <Row>
                <Col>
                    <TopNavigation />
                </Col>
            </Row>
            <Row>
                <Col>
                    {props.children}
                </Col>
            </Row>
            <Col>
            <footer><Button variant="primary">
                Footer
                </Button>
            </footer>
            </Col>
        </Container>
    </>;

} 