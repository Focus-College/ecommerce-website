import React from "react";
import { Container, Tab, Tabs, Row, Col } from "react-bootstrap";
import './styles.scss';


export default function Reviews_QandA_Tab(){
    return (
<div className="questions-and-reviews">

    <Tabs defaultActiveKey="reviews" id="review-qa-tab">
        <Tab eventKey="reviews" title="Reviews">
            <section className="reviews-Section">

            </section>
        </Tab>
        <Tab eventKey="QaA" title="Questions and Answers">
            <section>
            <Container className="qAnda-container">
                <Row >
                    <Col className="title-text" xs={2}>Question: </Col>
                    <Col className="qAnda-text">Is it really useful for sunburn?</Col>
                </Row>
                <hr/>
                <Row>
                    <Col className="title-text" xs={2}>Answer: </Col>
                    <Col className="qAnda-text">Yes, it is useful for minor sunburns such as heat and 
                    redness of the skin. It can soothe the skin. If the sunburn 
                    is severe and peeling, it may not be suitable. Hope it helps you.
                    </Col>
                </Row>

            </Container>
            </section>
        </Tab>
    </Tabs>

    </div>
)}


