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
                <NavButton name='1' url='/' />
                <NavButton name='2' url='/' />
                <NavButton name='3' url='/' />
                <NavButton name='4' url='/' />
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