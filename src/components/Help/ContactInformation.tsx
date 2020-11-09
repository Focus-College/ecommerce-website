import { styled } from '@material-ui/core';
import React from 'react';
import {  Col, Button, Form, Container, Row, Card } from 'react-bootstrap';

import './style.scss';





export default function ContactInformation (prps:{}){

    return <>
        
    <div className = "ContactInformation">

        <Container> 
            <h1>Send us your Message?</h1><br/>
             <Row>
                <Col xs lg="2" ></Col>
                <Col>                
                <Form>
                    <Form.Row>
                        <p> 
                            Please fill out the form below to contact us with a comment or question.
                            representative will respond to your message as soon as possible.
                        </p>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="firstName">
                        <Form.Label>First Name*</Form.Label>
                            <Form.Control placeholder="John" required />
                        </Form.Group>

                        <Form.Group as={Col} controlId="lastName">
                        <Form.Label>Last Name*</Form.Label>
                            <Form.Control placeholder="Luc" required  />
                        </Form.Group>
                    </Form.Row>
            
                    <Form.Row>
                        <Form.Group as={Col} controlId="telephone">
                            <Form.Label>Telephone</Form.Label>
                            <Form.Control placeholder="604 666 6666" />
                        </Form.Group>
                        
                        <Form.Group as={Col} controlId="eEmail" required>
                            <Form.Label>Email*</Form.Label>
                            <Form.Control type="email" placeholder="John@email.com" required />
                        </Form.Group>
                    </Form.Row>
                                    
                    <Row>
                        <Col xs lg="3"></Col>
                        <Col >
                            <Form.Group controlId="msgTextArea" >
                                <Form.Label>Please, write your message*</Form.Label>
                                <Form.Control as="textarea" rows={4} required />                       
                            </Form.Group>

                            <Form.Group  controlId="checkAgree">
                                <Form.Check
                                    required
                                    label="Agree to terms and conditions"
                                    feedback="You must agree before submitting."
                                    />
                            </Form.Group>
                            <Button variant="primary" type="submit" block>Send</Button>
                        </Col>
                        <Col xs lg="3"></Col>                        
                    </Row>   
                </Form>                
                </Col>
                <Col xs lg="2"></Col>
            </Row> 
            <hr></hr>
            
            <Row>
                <Col xs lg="2"></Col>
                <Col>
                    <h1>Hello. What can we help you with?</h1><br/>

                    <Row>  
                <Col>
                    <Card bg="danger" text="white" style={{ width: '20rem' }}>
                        <Card.Header className="text-center p-3"><h4>Sales</h4></Card.Header>
                        <Card.Body>
                            <Card.Text>
                                Have an inquiry or question?<br/> Reach out to our sales department.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-center p-3">
                            <big className="text-muted"><a href="mailto:email@example.com"> Email Sales </a></big>
                        </Card.Footer>
                    </Card>           
                </Col>
                <Col>
                    <Card bg="success" text="white" style={{ width: '20rem' }}>
                            <Card.Header className="text-center p-3"><h4>Purchasing</h4></Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    Do you have a quality product or service you would like us to consider?
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="text-center p-3">
                                <big className="text-muted"><a href="mailto:email@example.com"> Email Purchasing </a></big>
                            </Card.Footer>
                    </Card>                
                </Col>
            </Row>  
            <br/>
            <Row>
                <Col>
                    <Card bg="light" style={{ width: '20rem' }}>
                            <Card.Header className="text-center p-3"><h4>Careers</h4></Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    Are you a high caliber person who wants to be part of an innovative, quality oriented team?
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="text-center p-3">
                                <big className="text-muted"><a href="mailto:email@example.com">  Careers </a></big>
                            </Card.Footer>
                    </Card>                
                </Col>

                <Col>
                    <Card bg="warning" style={{ width: '20rem' }}>
                            <Card.Header className="text-center p-3"><h4>Shipping and Receiving</h4></Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    Do you have any questions about shipping, receiving, or other warehouse functions?
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="text-center p-3">
                                <big className="text-muted"><a href="mailto:email@example.com">  Shipping and Receiving </a></big>
                            </Card.Footer>
                    </Card>                
                </Col>
            </Row>  
         </Col>     
                <Col xs lg="2"></Col>  
            </Row>
            <hr/>
            <Row>
                <Col>
                    <h1>
                        Would you prefer to talk? <a href="tel:+123456788">Call today:  01 234 567 88</a>
                    </h1> 
                    
                </Col>     
            </Row>
            <hr/>
        </Container>
           
    </div>
    
    </>;





    

    
}


  