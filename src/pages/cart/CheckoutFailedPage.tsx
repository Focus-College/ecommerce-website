import React from 'react'
import { Route, Switch } from 'react-router';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import CheckoutSuccess from './CheckoutSuccessPage';
import CheckoutFailure from './CheckoutFailedPage';
import MainLayout from '../../layouts/MainLayout';
import { Alert, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { error } from 'console';
import { pathToFileURL } from 'url';
import CheckoutPage from "./CheckoutPage"



    function goBack(): string{

        let route = 'cart/checkout'
      
            return route
        

    }



export default function CheckoutFailedPage(props: {}) {

    let history = useHistory();

    const redirect = () => {
      history.push(goBack())
    }


    return <>
    
                 <Alert variant="danger">
            <Alert.Heading>Something went wrong!</Alert.Heading>
            <p>
             Please check your information and try again 
            </p>
        </Alert>
        
              <Route path="/cart/checkout"></Route>
              <Button  onClick = {redirect}  type = "submit" variant="danger" block > Go back to checkout</Button> 
        
        </>
    
      





}
