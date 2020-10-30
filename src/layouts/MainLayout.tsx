import React, { PropsWithChildren } from "react";
import TopNavigation from "../components/TopNavigation";
import { Col, Container, Row, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default function MainLayout(props: PropsWithChildren<{}>) {
    return (
        <>
            <Container className="main">
                <TopNavigation />
                <Row>
                    <Col>{props.children}</Col>
                </Row>
                <footer>
                    <Container fluid>
                        <Row>
                            <Col md={10} sm={8}></Col>
                            <Col md={2} sm={4}>
                                <LinkContainer to="/help">
                                <Button variant="outline-warning" block>Help</Button>
                                </LinkContainer>
                            </Col>
                        </Row>
                    </Container>
                </footer>
            </Container>
        </>
    );
}
