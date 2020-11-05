import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import CheckoutSuccess from './CheckoutSuccessPage';
import CheckoutFailure from './CheckoutFailedPage';
import { Link } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout';
import StripeCheckout from 'react-stripe-checkout';
import Form from 'react-bootstrap/Form';
import { Col } from 'react-bootstrap';



/* export default class TakeMoney extends React.Component {
 onToken = (token: any) => {
   fetch('http://example.com/movies.json')
   .then((response: { json: () => any; }) => response.json())
   .then((data: any) => console.log(data)); {
     method: 'POST',
     body: JSON.stringify(token),
   }).then(response => { 
      response.json().then(data =>
      {
       alert(`We are in business, ${data.email}`);
     });
   });
 }
   render() {
   return (
     
     <switch>
     <Route path="/cart/checkout/success" component={CheckoutSuccess} />
     <Route path="/cart/checkout/failure" component={CheckoutFailure} /> 
     <h1>Checkout Page</h1>
     
       <Link to="/cart/checkout/success">Success</Link>
       <Link to="/cart/checkout/failure">Failed</Link>
     </switch>

     
   )
 }
} */






export default function CheckoutPage() {


return  <MainLayout>{

    <Switch>
      <Route path="/cart/checkout/success" component={CheckoutSuccess} />
      <Route path="/cart/checkout/failure" component={CheckoutFailure} />
      <Route path="/cart/checkout">

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

        <h1>Checkout Page</h1>
        <Link to="/cart/checkout/success">Success</Link>
        <Link to="/cart/checkout/failure">Failed</Link>

      </Route>
    </Switch>
}</MainLayout>



} 

