import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const WhatWeDo = () => (
  <Container fluid={true} className="what-we-do">
    <Container>
      <content>
        <Row>
          <Col className="fake-triangle" />
          <Col xs={12} className="wrapper">
            <Row>
              <Col xs={12} className="header">
                <h2>What we{'\u00A0'}do</h2>
              </Col>
              <Col xs={12} sm={6} md={3} className="quote-mark">
                <span>
                  <h3>
                    Web <br /> development
                  </h3>
                </span>
              </Col>
              <Col xs={12} sm={6} md={3} className="quote-mark">
                <span>
                  <h3>
                    PHP <br /> consulting
                  </h3>
                </span>
              </Col>
              <Col xs={12} sm={6} md={3} className="quote-mark">
                <span>
                  <h3>
                    PHP <br /> training
                  </h3>
                </span>
              </Col>
              <Col xs={12} sm={6} md={3} className="quote-mark">
                <span>
                  <h3>
                    Application <br /> support
                  </h3>
                </span>
              </Col>
            </Row>
          </Col>
        </Row>
      </content>
    </Container>
  </Container>
);

export default WhatWeDo;
