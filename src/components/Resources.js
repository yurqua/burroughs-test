import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

const Resources = () => (
  <div>
    <Container fluid={true} className="resources">
      <Container>
        <content>
          <Row className="resources">
            <Col xs={12} className="header">
              <h2>
                <span>Resources</span>
                <svg
                  width={360}
                  height={75}
                  viewBox={[0, 0, 360, 75]}
                  style={{ shapeRendering: 'geometricPrecision' }}
                >
                  <rect
                    x={0}
                    y={0}
                    width={360}
                    height={70}
                    style={{ fill: 'transparent' }}
                  />
                  <g
                    style={{
                      overflow: 'hidden',
                      textAnchor: 'middle',
                      fontSize: '65',
                      fontWeight: 'bold'
                    }}
                  >
                    <defs>
                      <mask id="textMask">
                        <text style={{ fill: 'white' }} x="175" y="55">
                          Resources
                        </text>
                      </mask>
                      <filter
                        id="innerShadow"
                        x="-20%"
                        y="-20%"
                        width="140%"
                        height="140%"
                      >
                        <feGaussianBlur
                          in="SourceGraphic"
                          stdDeviation="1.5"
                          result="blur"
                        />
                        <feOffset in="blur" dx="1.5" dy="1.5" />
                      </filter>
                    </defs>
                    <g mask={'url(#textMask)'}>
                      <rect
                        x="0"
                        y="0"
                        width="360"
                        height="75"
                        style={{ fill: '#555' }}
                      />
                      <text
                        style={{
                          fill: '#ffd41c',
                          filter: 'url(#innerShadow)'
                        }}
                        x="175"
                        y="55"
                      >
                        Resources
                      </text>
                    </g>
                  </g>
                </svg>
              </h2>
            </Col>
            <Col xs={12} className="article-block">
              <Row>
                <Col xs={12} md={4} className="article">
                  <h3>White papers</h3>
                  <div className="content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur{'\u00A0'}adipiscing
                      elit.
                    </p>
                    <p>
                      Fusce tortor arcu, accumsan in turpis et, efficitur
                      porttitor ligula.
                    </p>
                    <p>Morbi ac gravida diam.</p>
                  </div>
                </Col>
                <Col xs={12} md={3} className="article">
                  <h3>Resources</h3>
                  <div className="content">
                    <p>
                      <Link to="/">Click here</Link> to enter your email{
                        '\u00A0'
                      }address and receive our{'\u00A0'}Monthly Newsletter
                    </p>
                  </div>
                </Col>
                <Col xs={12} md={5} className="article">
                  <h3>Inviqa techportal</h3>
                  <div className="content">
                    <Row>
                      <Col xs={12} sm={6}>
                        <p>
                          The Inviqa techPortal is an information base for
                          everything related to PHP – from developers, to
                          developers.
                        </p>
                      </Col>
                      <Col xs={12} sm={6}>
                        <a href="https://jobs.jobvite.com/inviqa/jobs">
                          <img
                            src={require('./../images/tech-portal-banner.jpg')}
                            alt="Inviqa Techportal logo"
                          />
                        </a>
                        <p>Visit our techPortal</p>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
              <Row className="article">
                <Col xs={12} md={4} className="article">
                  <div className="more-link">
                    <Link to="/">More</Link> White Papers
                  </div>
                </Col>
                <Col xs={12} md={3} className="article">
                  <div className="more-link">
                    <Link to="/">More</Link> Resources
                  </div>
                </Col>
                <Col xs={12} md={5} className="article">
                  <div className="more-link">
                    <Link to="/">View</Link> the latest vacancies
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </content>
      </Container>
    </Container>
    <Container fluid={true} className="footer">
      <Container>
        <content />
      </Container>
    </Container>
  </div>
);

export default Resources;
