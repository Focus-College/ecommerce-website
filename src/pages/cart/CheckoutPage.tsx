import React from 'react'
import { Route, Switch } from 'react-router';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import CheckoutSuccess from './CheckoutSuccessPage';
import CheckoutFailure from './CheckoutFailedPage';
import { Link } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout';
import { Col } from 'react-bootstrap';

export default function CheckoutPage( props:{} ){

    return <MainLayout>
        <Form>
        <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
            </Form.Group>
        </Form.Row>

        <Form.Group controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" />
        </Form.Group>

        <Form.Group controlId="formGridAddress2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control placeholder="Apartment, studio, or floor" />
        </Form.Group>

        <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Control as="select" defaultValue="Choose...">
                <option>Choose...</option>
                <option>...</option>
            </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control />
            </Form.Group>
        </Form.Row>

        <Form.Group id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="submit">
            Submit
        </Button>
    </Form>
        <Switch>
            <Route path="/cart/checkout/success" component={CheckoutSuccess}/>
            <Route path="/cart/checkout/failure" component={CheckoutFailure}/>
            <Route path="/cart/checkout">

                <h1>Checkout Page</h1>
                <Link to="/cart/checkout/success">Success</Link>
                <Link to="/cart/checkout/failure">Failed</Link>

            </Route>
        </Switch>


    </MainLayout>;

}