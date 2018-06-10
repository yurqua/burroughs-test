import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ProductCard from './ProductCard';

class Products extends Component {
  componentDidMount() {
    let products = require('./../services/product-details.json');
    this.setState({
      products: products.products
    });
  }

  render() {
    return (
      <Container fluid={true}>
        <Container>
          <content>
            <Row className="products">
              <Col xs={12}>
                <h2>Products</h2>
              </Col>
              {this.state &&
                this.state.products.map(product => (
                  <ProductCard key={product.product_id} product={product} />
                ))}
            </Row>
          </content>
        </Container>
      </Container>
    );
  }
}

export default Products;
