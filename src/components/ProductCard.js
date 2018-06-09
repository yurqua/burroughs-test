import React, { Component } from 'react';
import { Col } from 'reactstrap';
import '../App.css';

class ProductCard extends Component {
    render() {
      return (
        <Col xs={12} md={3} className='product'>
         <div>
           <img src={require('./../images/shirt-blue.jpg')} alt='' className='product-image'/>
         </div>
         <div className='swatch-selector'>
           <img src={require('./../images/swatch-blue.png')} alt='' className='swatch' />
           <img src={require('./../images/swatch-blue.png')} alt='' className='swatch' />
           <img src={require('./../images/swatch-blue.png')} alt='' className='swatch' />
         </div>
         <div className='product-title'>Plaid Cotton Shirt</div>
         <div className='product-price'>
             <span className='original'>&pound;200</span>
             <span className='sale'>&pound;160</span>
         </div>
        </Col>
      );
    }
}

export default ProductCard;