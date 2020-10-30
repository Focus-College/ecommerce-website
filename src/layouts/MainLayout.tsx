import React, { PropsWithChildren } from "react";
import TopNavigation from "../components/TopNavigation";
import { Col, Container, Row } from "react-bootstrap";

export default function MainLayout(props: PropsWithChildren<{}>) {
    return (
        <>
            <Container className="main">
                <TopNavigation />
                <Row>
                    <Col>{props.children}</Col>
                </Row>
                <footer>Footer</footer>
            </Container>
        </>
    );
}
