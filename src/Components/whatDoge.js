import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const WhatDoge = () => {
  return (
    <section className='whatDoge'>
      <Container>
        <Row className='justify-content-center'>
          <Col md={8}>
            <div className='content'>
              <div className='heading'>
                <h2>Something about WORLD WIDE CRYPTO</h2>
              </div>
              <p className='dim'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default WhatDoge