import React, { Component } from 'react';
import { Col } from 'reactstrap';
import PropTypes from 'prop-types';
import '../App.css';

class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: this.props.product
    };
  }

  handleOnMouseEnter(e, colour) {
    e.preventDefault();
    if (this.state.activeProduct !== colour) {
      this.setState({
        activeProduct: colour
      });
    }
  }

  render() {
    //no rendering before the product is fetched
    if (!this.state.product) return null;
    //the first colour variation in the colours array should be activated by default
    let activeProduct = this.state.activeProduct
      ? this.state.activeProduct
      : this.state.product.products_colours[0];
    return (
      <Col xs={12} md={3} className="product">
        <div>
          <img
            src={require('./../images/shirt-' + activeProduct + '.jpg')}
            alt={this.state.product.product_title}
            className="product-image"
          />
        </div>
        <div className="swatch-selector">
          {this.state.product.products_colours.map(colour => {
            //if active product was already altered with a pointer hover, it should be reflected on the swatch class
            let selected =
              colour === this.state.activeProduct ? 'selected' : '';
            //but if its the initial render, the first swatch gets activated
            selected =
              !this.state.activeProduct &&
              this.state.product.products_colours[0] === colour
                ? 'selected'
                : selected;
            return (
              <img
                src={require('./../images/swatch-' + colour + '.png')}
                key={colour}
                alt={colour.charAt(0).toUpperCase() + colour.slice(1)}
                title={colour.charAt(0).toUpperCase() + colour.slice(1)}
                onMouseEnter={e => this.handleOnMouseEnter(e, colour)}
                className={'swatch ' + selected}
              />
            );
          })}
        </div>
        <div className="product-title">{this.state.product.product_title}</div>
        <div className="product-price">
          <span className="original">
            &pound;{this.state.product.product_price_original}
          </span>
          <span className="sale">
            &pound;{this.state.product.product_price_sale}
          </span>
        </div>
      </Col>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.object
};

export default ProductCard;
