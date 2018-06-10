import React, { Component } from 'react';
import { Col } from 'reactstrap';
import PropTypes from 'prop-types';
import '../App.css';

class ProductCard extends Component {
  constructor (props) {
    super(props);
    this.state = {
      product: this.props.product
    };
  } 

  handleOnMouseEnter (e, colour) {
    e.preventDefault();
    if (this.state.activeProduct !== colour) {
      this.setState({
        activeProduct: colour
      });
    }
  }

  render() {
    if (!this.state.product) return null;
    let activeProduct = this.state.activeProduct ? this.state.activeProduct : this.state.product.products_colours[0];
    return (
      <Col xs={12} md={3} className='product'>
        <div>
          <img src={require('./../images/shirt-' + activeProduct + '.jpg')} alt={this.state.product.product_title} className='product-image'/>
        </div>
        <div className='swatch-selector'>
          {this.state.product.products_colours.map((colour) => { 
            let selected = colour === this.state.activeProduct ? 'selected' : '';
            selected = !this.state.activeProduct && this.state.product.products_colours[0] === colour ? 'selected' : selected;
            return (
              <img src={require('./../images/swatch-' + colour + '.png')} 
                key={colour} 
                alt={colour.charAt(0).toUpperCase() + colour.slice(1)}
                onMouseEnter={((e) => this.handleOnMouseEnter(e, colour))}
                className={'swatch ' + selected}  
              />
            )}
          )}
        </div>
        <div className='product-title'>{this.state.product.product_title}</div>
        <div className='product-price'>
            <span className='original'>&pound;{this.state.product.product_price_original}</span>
            <span className='sale'>&pound;{this.state.product.product_price_sale}</span>
        </div>
      </Col>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.object
};

export default ProductCard;