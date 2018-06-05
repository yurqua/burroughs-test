import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import ProductCard from './ProductCard'
import Logo from '../images/inviqa-logo.svg'
import '../App.css';

class Home extends Component {
    componentDidMount () {
    }

    render() {
      return (
        <div>
          <Container fluid={true} className='hero'>
            <Container>
              <content>
                <Row>
                  <Col xs={12}>
                    <div className='logo'><img src={Logo} alt='INVIQA Logo'/></div>
                    <h2>We have a new name</h2>
                    <span>
                      Inviqa, formally known as Ibuildings are starting the
                      new year with a fresh new innovative look. We are a bunch
                      of intelligent people who always pride the 
                      quality in our work.
                    </span>
                  </Col>
                </Row>
              </content>
            </Container>
          </Container>
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
                  <Col className='fake-triangle'>
                  </Col>
                </Row>
              </content>
            </Container>
          </Container>
          <Container fluid={true}>
            <Container>
              <content>
                <Row className='what-we-do'>
                  <Col xs={12} className='wrapper'>
                    <Row>
                      <Col xs={12}>
                        <h2>What we do</h2>
                      </Col>
                      <Col xs={12} md={3} className='quote-mark'>
                        <h3>Web development</h3>
                      </Col>
                      <Col xs={12} md={3} className='quote-mark'>
                        <h3>PHP consulting</h3>
                      </Col>
                      <Col xs={12} md={3} className='quote-mark'>
                        <h3>PHP training</h3>
                      </Col>
                      <Col xs={12} md={3} className='quote-mark'>
                        <h3>Application support</h3>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </content>
            </Container>
          </Container>
          <Container fluid={true} className='resources'>
            <Container>
              <content>
                <Row className='resources'>
                  <Col xs={12}>
                    <h2>Resources</h2>
                  </Col>
                  <Col xs={12} md={4} className='article'>
                    <h3>White papers</h3>
                    <div className='content'>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      <p>Fusce tortor arcu, accumsan in turpis et, efficitur porttitor ligula.</p>
                      <p>Morbi ac gravida diam.</p>
                    </div>
                    <div className='more-link'>
                      <Link to='/'>More</Link> White Papers 
                    </div>
                  </Col>
                  <Col xs={12} md={3} className='article'>
                    <h3>Resources</h3>
                    <div className='content'>
                      <p>
                        <Link to='/'>Click here</Link> to enter your email address and receive our Monthly Newsletter
                      </p>
                    </div>
                    <div className='more-link'>
                      <Link to='/'>More</Link> Resources 
                    </div>
                  </Col>
                  <Col xs={12} md={5} className='article'>
                    <h3>Inviqa techportal</h3>
                    <div className='content'>
                      <Row>
                        <Col xs={12} sm={6}>
                          <p>
                            The Inviqa techPortal is an information base for everything related to 
                            PHP – from developers, to developers.
                          </p>
                        </Col>
                        <Col xs={12} sm={6}>
                          <Link to='/'>Image</Link>
                          <p>Visit our techPortal</p>
                        </Col>
                      </Row>
                    </div>
                    <div className='more-link'>
                      <Link to='/'>View</Link> the latest vacancies 
                    </div>
                  </Col>
                </Row>
              </content>
              </Container>
            </Container>
            <Container fluid={true} className='footer'>
              <Container>
                <content>
                </content>
              </Container>
            </Container>
  
        </div>
      );
    }
}

export default Home;