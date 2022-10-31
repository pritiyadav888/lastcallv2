import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {Alert,Button} from 'react-bootstrap';

const AddToCartComponent = () =>{
    const [show, setShow] = useState(true);
    return(
        <Alert show={show} variant="success" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>The product was added to your cart!</Alert.Heading>
        <p>
         <Button variant='success'>Go Back</Button>{" "}
         <Link to="/cart"><Button variant='danger'>Go to Cart</Button></Link>
         
        </p>
      </Alert>
    );

}

export default AddToCartComponent