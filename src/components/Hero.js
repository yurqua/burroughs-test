import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Logo from '../images/inviqa-logo.svg'
import { Animated } from 'react-animated-css';

const Hero = () => (
  <Container fluid={true} className='hero'>
    <Container>
      <content>
        <Animated animationIn="fadeInRightBig" animationOut="fadeOut" isVisible={true}>
          <Row>
            <Col xs={12}>
              <div className='logo'><img src={Logo} alt='INVIQA Logo'/></div>
              <h2>We have a new name</h2>
              <Row>
                <Col xs={12} md={{ size: 6, offset: 3 }} className='hero-content'>
                  Inviqa, formally known as Ibuildings are starting the
                  new{'\u00A0'}year with a fresh new innovative look. We are a bunch
                  of intelligent people who always pride the 
                  quality{'\u00A0'}in{'\u00A0'}our{'\u00A0'}work.
                </Col>
              </Row>
            </Col>
          </Row>
        </Animated>
      </content>
    </Container>
  </Container>
);

export default Hero;