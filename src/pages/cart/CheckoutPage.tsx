import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import CheckoutSuccess from './CheckoutSuccessPage';
import CheckoutFailure from './CheckoutFailedPage';
import { Link } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout';
import StripeCheckout from 'react-stripe-checkout';
import { Col } from 'react-bootstrap';








export default function CheckoutPage() {


return  <MainLayout>{

    <Switch>
      <Route path="/cart/checkout/success" component={CheckoutSuccess} />
      <Route path="/cart/checkout/failure" component={CheckoutFailure} />
      <Route path="/cart/checkout">

      <Form className="shippingInfo">
    <Form.Row>
      <Form.Group as={Col} controlId="formGridFullName">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="name" placeholder="Please Enter Your Full Name" />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridPhone">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="phoneNumber" placeholder="Phone Number" />
      </Form.Group>
    </Form.Row>

    <Form.Group controlId="formGridAddress1">
      <Form.Label>Address Line 1 (or Company Name)</Form.Label>
      <Form.Control placeholder="Street Address, P.O box, Company Nmae, c/o" />
    </Form.Group>

    <Form.Group controlId="formGridAddress2">
      <Form.Label>Address 2(Optional)</Form.Label>
      <Form.Control placeholder="Apartment, suite, unit, building, floor, ect" />
    </Form.Group>

    <Form.Row>
      <Form.Group as={Col} controlId="formGridCity">
        <Form.Label>City</Form.Label>
        <Form.Control />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridState">
        <Form.Label>Province</Form.Label>
        <Form.Control as="select" defaultValue="Choose...">
          <option>Choose...</option>
          <option>BC</option>
          <option>AB</option>
          <option>SK</option>
          <option>MB</option>
          <option>QC</option>
          <option>ON</option>
          <option>NL</option>
          <option>PE</option>
          <option>NB</option>
          <option>NS</option>
          <option>PE</option>
          <option>YT</option>
          <option>NT</option>
          <option>NU</option>
        </Form.Control>
      </Form.Group>

      <Form.Group as={Col} controlId="formGridZip">
        <Form.Label>Postal Code</Form.Label>
        <Form.Control />
      </Form.Group>
    </Form.Row>
  </Form>

        <Form>
          <Form.Row className="payment-form">

            <Col>
              <Form.Control placeholder="Cardholder Name" />
            </Col>
          </Form.Row>
          <Form.Row className="payment-form">


            <Col>
              <Form.Control type="number" placeholder="Card number" />
            </Col>
          </Form.Row>
          <Form.Row className="payment-form">


            <Col>
              <Form.Control
                type="date"
                maxLength={4}
                placeholder="M/Y " />



            </Col>
            <Col>
              <Form.Control
                type="number"
                maxLength={3}
                placeholder="CVC " />
            </Col>
          </Form.Row>
        </Form>

        <button> Submit information </button>

        <Link to="/cart/checkout/success">Success</Link>
        <Link to="/cart/checkout/failure">Failed</Link>

      </Route>
    </Switch>
  }</MainLayout>



} 

