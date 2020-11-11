import React from "react";
import { Container, Tab, Tabs, Row, Col, Form, Button, Table, Image } from "react-bootstrap";
import { Rating } from '@material-ui/lab';
import './styles.scss';
import { IProduct } from "../ProductList/HorizontalProductList";



export default function Reviews_QandA_Tab(){
    return (
<div className="questions-and-reviews">

    <Tabs defaultActiveKey="reviews" id="review-qa-tab">
        <Tab eventKey="reviews" title="Reviews">
            <section className="review-section">
                <Table>
                    <Col>
                        <Row>
                            <h3>Review Title</h3>
                            <Rating name="half-rating" defaultValue={2.5} precision={1} />    
                        </Row>
                    </Col>
                    <Col>
                    <Row className="review-content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Phasellus sit amet neque efficitur, luctus velit ut, sagittis quam. 
                        Orci varius natoque penatibus et magnis disipsum dolor sit amet, consectetur 
                        adipiscing elit. Phasellus sit amet neque efficitur, luctus velit ut, sagittis quam. 
                        Orci varius natoque penatibus et magnis dis</p>    
                    </Row>
                    </Col>
                </Table>
                <div>

                </div>
                <div>

                </div>


            
            
            </section>
        </Tab>
        <Tab eventKey="QaA" title="Questions and Answers">
            <section className="qAnda-section">

            <Container>
                <Form className="askQuestion">
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label className="questionTitle">Have a Question?</Form.Label>
                        <Form.Control as="textarea" placeholder="Ask Your Question Here..." rows={3} />
                        <Button className="btn-info">Submit</Button>
                    </Form.Group>
                </Form>
            </Container>

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


