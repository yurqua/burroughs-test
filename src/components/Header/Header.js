import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import NavButton from './NavButton'
import '../../App.css';
 
class Header extends Component {
  render() {
    return (
      <header>
        <Container>
          <Row>
            <Col xs='12' md='7' lg='8'>
              <nav>
                <NavButton name='Case studies' url='/' />
                <NavButton name='What we do' url='/' />
                <NavButton name='Resources' url='/' />
                <NavButton name='Contact us' url='/' />
              </nav>
            </Col>
            <Col xs='6' md='3' lg='2'>
              <a href='https://www.facebook.com/Inviqa/'>
                <i className="icon-button icon-facebook-squared">&#xe800;</i> 
              </a>
              <a href='https://twitter.com/inviqa'>
                <i className="icon-button icon-twitter-squared">&#xe801;</i>  
              </a>
              <a href='https://linkedin.com/company/inviqa'>
                <i className="icon-button icon-linkedin-squared">&#xe802;</i> 
              </a>
              <a href='https://plus.google.com/+Inviqa'>
                <i className="icon-button icon-gplus-squared">&#xe803;</i>    
              </a>
            </Col>
            <Col xs='6' md='2' lg='2' itemProp="telephone">
              <a href='tel:+44-0-20-3179-9555' className='anchor-phone'>
                <i className="icon-button icon-phone">&#xe804;</i>
                <span className='phone'>
                  020 3179 9555            
                </span>
              </a>
            </Col>
          </Row>
        </Container>
      </header>
  );
  }
}

export default Header;