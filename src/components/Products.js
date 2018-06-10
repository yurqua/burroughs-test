import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ProductCard from './ProductCard'

class Products extends Component {
    componentDidMount () {
    }

    render() {
      return (
          <Container fluid={true}>
            <Container>
              <content>
                <Row className='products'>
                  <Col xs={12}>
                    <h2>Products</h2>
                  </Col>
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                </Row>
              </content>
            </Container>
          </Container>
      );
    }
}

export default Products;