import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import ProductCard from './ProductCard'
import Logo from '../images/inviqa-logo.svg'
import { Animated } from 'react-animated-css';
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
                <Animated animationIn="fadeInRightBig" animationOut="fadeOut" isVisible={true}>
                  <Row>
                    <Col xs={12}>
                      <div className='logo'><img src={Logo} alt='INVIQA Logo'/></div>
                      <h2>We have a new name</h2>
                      <Row>
                        <Col xs={12} md={{ size: 6, offset: 3 }} className='hero-content'>
                          Inviqa, formally known as Ibuildings are starting the
                          new&nbsp;year with a fresh new innovative look. We are a bunch
                          of intelligent people who always pride the 
                          quality&nbsp;in&nbsp;our&nbsp;work.
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Animated>
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
                </Row>
              </content>
            </Container>
          </Container>
          <Container fluid={true} className='what-we-do'>
            <Container>
              <content>
                <Row>
                  <Col className='fake-triangle'>
                  </Col>
                  <Col xs={12} className='wrapper'>
                    <Row>
                      <Col xs={12} className='header'>
                        <h2>What we&nbsp;do</h2>
                      </Col>
                      <Col xs={12} sm={6} md={3} className='quote-mark'>
                        <span>
                          <h3>Web <br/> development</h3>
                        </span>
                      </Col>
                      <Col xs={12} sm={6} md={3} className='quote-mark'>
                        <span>
                          <h3>PHP <br/> consulting</h3>
                        </span>
                      </Col>
                      <Col xs={12} sm={6} md={3} className='quote-mark'>
                        <span>
                          <h3>PHP <br/> training</h3>
                        </span>
                      </Col>
                      <Col xs={12} sm={6} md={3} className='quote-mark'>
                        <span>
                          <h3>Application <br/> support</h3>
                        </span>
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
                  <Col xs={12} className='header'>
                    <h2>
                      <span>Resources</span>
                      <svg width={360} height={75} viewBox={[0, 0, 360, 75]} style={{'shapeRendering': 'geometricPrecision'}}>
                        <rect x={0} y={0} width={360} height={70} style={{fill: 'transparent'}}/>
                        <g style={{'overflow':'hidden', 'textAnchor': 'middle', 'fontSize':'65', 'fontWeight': 'bold'}}>
                          <defs>
                            <mask id="textMask">
                              <text style={{'fill':'white'}} x="175" y="55">Resources</text>
                            </mask>
                            <filter id="innerShadow" x="-20%" y="-20%" width="140%" height="140%">
                              <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="blur"/>
                              <feOffset in="blur" dx="1.5" dy="1.5"/>
                            </filter>
                          </defs>
                          <g mask={'url(#textMask)'}>
                            <rect x="0" y="0" width="360" height="75" style={{'fill':'#555'}}/>
                            <text style={{
                              fill: '#ffd41c', 
                              'filter': 'url(#innerShadow)'
                            }} x="175" y="55">Resources</text>
                          </g>
                        </g>
                      </svg>
                    </h2>
                  </Col>
                  <Col xs={12} className='article-block'>
                    <Row>
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