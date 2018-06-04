import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../App.css';

class ProductCard extends Component {
    render() {
      return (
        <Col xs={12} md={3}>
         <div>Image</div>
         <div className='swatch-selector'>Swatch selector</div>
         <div className='product-name'>Product name</div>
         <div className='prices'>
             <span className='old-price'>&pound;</span>
             <span className='new-price'>&pound;</span>
         </div>
        </Col>
      );
    }
}

export default ProductCard;