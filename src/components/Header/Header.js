import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';
import NavButton from './NavButton'
import '../../App.css';
 
class Header extends Component {
  render() {
    return (
      <header>
        <Container>
          <Row>
            <Col xs="12" md="8">
              <nav>
                <NavButton name='Case studies' url='/' />
                <NavButton name='What we do' url='/' />
                <NavButton name='Resources' url='/' />
                <NavButton name='Contact us' url='/' />
              </nav>
            </Col>
            <Col xs="6" md="2">social</Col>
            <Col xs="6" md="2">phone</Col>
          </Row>
        </Container>
      </header>
  );
  }
}

export default Header;