import React from 'react'
import { Route } from 'react-router';
import Button from 'react-bootstrap/Button'

import { Alert} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';




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

            <div className="checkoutFailure">
            <Alert className="failureAlert" variant="danger">
                <Alert.Heading>Something went wrong!</Alert.Heading>
                <p>
                Please check your information and try again 
                </p>
            </Alert>
        
              <Route path="/cart/checkout"></Route>
              <Button  onClick = {redirect}  type = "submit" variant="danger" block > Go back to checkout</Button> 
            </div>
            
        
        </>
    
      





}
