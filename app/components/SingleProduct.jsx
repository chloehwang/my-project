import React from 'react'
import { Grid, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router';
import ReviewContainer from '../containers/ReviewContainer'


export default function({selectedProduct}) {



  return (
    <Grid>
      <Row className="show-grid">
        <Col sm={12} md={5} className="product-photo">
            <img className="image-responsive" src={selectedProduct.photo} />
        </Col>
        <Col sm={12} md={7} className="product-info">
            <h1> {selectedProduct.name} </h1>
            <h3> ${selectedProduct.price} </h3>
            <p> {selectedProduct.description} </p>
            <Button bsStyle="info" className="add-cart-btn">
              <Link to="/cart"><h4>Add to Cart</h4></Link>
            </Button>
        </Col>


        <Col sm={12} >
          <ReviewContainer />
        </Col>
      </Row>
    </Grid>
  )
}