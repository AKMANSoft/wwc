import React from 'react';
import NewGold from '../images/new-gold.svg'
import HouseDoge from '../images/house-doge.svg'
import Cloud from '../images/videos/giphy.gif'
import { Container, Row, Col, Button, Image } from 'react-bootstrap';

const Collection = () => {
  return (
    <div className='collection-section'>
      <Container>
        <Row>
          <Col md={12}>
            <div className='content'>
              <div className='heading m-0'>
                <h2>COLLECTIONS</h2>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col className='p-0' cols={8}>
            <div className='missions'>
              <ul>
                <li>
                  <div className='single-mission'>
                    <div className='misision-box'>
                      <div className='mission-body'>
                        <div className='mission-desc'>
                          <div className='content'>
                            <div className='heading'>
                              <h4>GUITAR WOLF</h4>
                            </div>
                          </div>
                        </div>
                        <div className='mission-img'>
                          <Image src={NewGold} alt="mission-img"/>
                        </div>
                      </div>
                      <div className='mission-footer'>
                        <Button variant="theme" className="btn-block">JOIN WHITELIST</Button>
                      </div>
                    </div>
                  </div>
                  <div className='shape shape-bottom-left'>
                    <img src={Cloud} alt='' className='giphy'/>
                  </div>
                </li>
                <li>
                  <div className='single-mission'>
                    <div className='misision-box'>
                      <div className='mission-body'>
                        <div className='mission-desc'>
                          <div className='content'>
                            <div className='heading'>
                              <h4>wolf drummer</h4>
                            </div>
                          </div>
                        </div>
                        <div className='mission-img'>
                          <Image src={HouseDoge} alt="mission-img"/>
                        </div>
                      </div>
                      <div className='mission-footer'>
                        <Button variant="theme" className="btn-block" disabled>COMING SOON</Button>
                      </div>
                    </div>
                  </div>
                  <div className='shape shape-top-right'>
                    <img src={Cloud} alt='' className='giphy'/>
                  </div>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
} 

export default Collection