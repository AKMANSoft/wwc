import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

import Doge from '../images/doge.png'
import Gold from '../images/gold.png'
import Princess from '../images/princess.png'
import Team4 from '../images/team4.png'
import Team5 from '../images/team5.png'
import Team6 from '../images/team6.png'
import "../css/slick.min.css";
import Slider from "react-slick";

const Team = () => {
  const settings = {
    dots: false,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: "15px",
          slidesToScroll: 1
        }
      },
    ]
  };
  return(
    <section className='team-section pt-0'>
      <Container>
        <Row>
          <Col md={12}>
            <div className='content'>
              <div className='heading'>
                <h3>OUR TEAM</h3>
              </div>
            </div>
            <div className='team-slider'>
              <Slider {...settings}>
                <div className='team-member'>
                  <div className='team-body'>
                    <div className='team-img'>
                      <Image src={Doge} alt="team-member"/>
                    </div>
                    <div className='team-desc'>
                      <div className='content'>
                        <div className='heading'>
                          <h5>The Crypto Prince </h5>
                        </div>
                        <p className='dim'>Project Enforcer & Business Entrepreneur</p>
                      </div>
                    </div>
                  </div>
                  <div className='team-footer'>
                    <Button variant="theme" onClick={(e) => {e.currentTarget.classList.contains('active') ? e.currentTarget.classList.remove('active') : e.currentTarget.classList.add('active')}}>Special Skills</Button>
                      <div className='overlay-section'>
                        <div className='content'>
                          <div className='heading'>
                            <h5>The Crypto Prince</h5>
                          </div>
                          <p className='dim'>
                          NFT Expert with experience across 20 NFT projects & crypto projects with real world use case.
                          </p>
                        </div>
                      </div>
                  </div>
                </div>
                <div className='team-member'>
                  <div className='team-body'>
                    <div className='team-img'>
                      <Image src={Princess} alt="team-member"/>
                    </div>
                    <div className='team-desc'>
                      <div className='content'>
                        <div className='heading'>
                          <h5>Web3 Degen</h5>
                        </div>
                        <p className='dime'>Project King Pin & NFT Wizard</p>
                      </div>
                    </div>
                  </div>
                  <div className='team-footer'>
                    <Button variant="theme" onClick={(e) => {e.currentTarget.classList.contains('active') ? e.currentTarget.classList.remove('active') : e.currentTarget.classList.add('active')}}>Special Skills</Button>
                      <div className='overlay-section'>
                        <div className='content'>
                          <div className='heading'>
                            <h3>Demo</h3>
                          </div>
                          <p className='dim'>
                          Master chartist, crypto currency and blockchain technologies professional
                          </p>
                        </div>
                      </div>
                  </div>
                </div>
                <div className='team-member'>
                  <div className='team-body'>
                    <div className='team-img'>
                      <Image src={Gold} alt="team-member"/>
                    </div>
                    <div className='team-desc'>
                      <div className='content'>
                        <div className='heading'>
                          <h5>The prediction Ninja</h5>
                        </div>
                        <p className='dim'> Master Crypto Chartist & Math Genius</p>
                      </div>
                    </div>
                  </div>
                  <div className='team-footer'>
                    <Button variant="theme" onClick={(e) => {e.currentTarget.classList.contains('active') ? e.currentTarget.classList.remove('active') : e.currentTarget.classList.add('active')}}>Special Skills</Button>
                      <div className='overlay-section'>
                        <div className='content'>
                          <div className='heading'>
                            <h3>The prediction Ninja</h3>
                          </div>
                          <p className='dim'>
                          Master chartist, crypto currency and blockchain technologies professional
                          </p>
                        </div>
                      </div>
                  </div>
                </div>

                <div className='team-member'>
                  <div className='team-body'>
                    <div className='team-img'>
                      <Image src={Team4} alt="team-member"/>
                    </div>
                    <div className='team-desc'>
                      <div className='content'>
                        <div className='heading'>
                          <h5>The Metaverse Land Tycoon </h5>
                        </div>
                        <p className='dim'>Master Business enforcer & Entrepreneur</p>
                      </div>
                    </div>
                  </div>
                  <div className='team-footer'>
                    <Button variant="theme" onClick={(e) => {e.currentTarget.classList.contains('active') ? e.currentTarget.classList.remove('active') : e.currentTarget.classList.add('active')}}>Special Skills</Button>
                      <div className='overlay-section'>
                        <div className='content'>
                          <div className='heading'>
                            <h5>The Metaverse Land Tycoon</h5>
                          </div>
                          <p className='dim'>Lead crypto investor , Community building god and project manager</p>
                        </div>
                      </div>
                  </div>
                </div>
                <div className='team-member'>
                  <div className='team-body'>
                    <div className='team-img'>
                      <Image src={Team5} alt="team-member"/>
                    </div>
                    <div className='team-desc'>
                      <div className='content'>
                        <div className='heading'>
                          <h5>NFT Goddess</h5>
                        </div>
                        <p className='dime'>Blockchain Queen & Entrepreneur</p>
                      </div>
                    </div>
                  </div>
                  <div className='team-footer'>
                    <Button variant="theme" onClick={(e) => {e.currentTarget.classList.contains('active') ? e.currentTarget.classList.remove('active') : e.currentTarget.classList.add('active')}}>Special Skills</Button>
                      <div className='overlay-section'>
                        <div className='content'>
                          <div className='heading'>
                            <h3>NFT Goddess</h3>
                          </div>
                          <p className='dim'>NFT expert and lead crypto investor, with impertinant crypto a       community knowledge based background.
                          </p>
                        </div>
                      </div>
                  </div>
                </div>
                <div className='team-member'>
                  <div className='team-body'>
                    <div className='team-img'>
                      <Image src={Team6} alt="team-member"/>
                    </div>
                    <div className='team-desc'>
                      <div className='content'>
                        <div className='heading'>
                          <h5>The Crypto Carpenter</h5>
                        </div>
                        <p className='dim'> NFT Architect of Real-world Assets</p>
                      </div>
                    </div>
                  </div>
                  <div className='team-footer'>
                    <Button variant="theme" onClick={(e) => {e.currentTarget.classList.contains('active') ? e.currentTarget.classList.remove('active') : e.currentTarget.classList.add('active')}}>Special Skills</Button>
                      <div className='overlay-section'>
                        <div className='content'>
                          <div className='heading'>
                            <h3>The Crypto Carpenter</h3>
                          </div>
                          <p className='dim'>Master R4 Recognised Researcher, Customer Service Pro and Networking Guru.</p>
                        </div>
                      </div>
                  </div>
                </div>
              </Slider>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Team