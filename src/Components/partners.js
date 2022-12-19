import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

import Brand1 from '../images/brand-1.svg'
import Brand2 from '../images/brand-2.svg'
import Brand3 from '../images/brand-3.svg'
import Brand4 from '../images/brand-4.svg'
import Brand5 from '../images/brand-5.svg'
import Brand6 from '../images/brand-6.svg'
import Brand7 from '../images/brand-7.svg'
import Brand8 from '../images/brand-8.svg'
import Brand9 from '../images/brand-9.svg'
import Brand10 from '../images/brand-10.svg'
import Brand11 from '../images/brand-11.svg'
import Brand12 from '../images/brand-12.svg'


const Partners = () => {
  return (
    <section className='partner-section'>
      <Container>
        <Row className='justify-content-center'>
          <Col md={10}>
            <div className='content'>
              <div className='heading'>
                <h3>INVESTORS & PARTNERS</h3>
              </div>
            </div>
            <div className='partner-list'>
              <ul>
                <li><div className='partner-img'><Image src={Brand1} alt="Brand1"/></div></li>
                <li><div className='partner-img'><Image src={Brand2} alt="Brand2"/></div></li>
                <li><div className='partner-img'><Image src={Brand3} alt="Brand3"/></div></li>
                <li><div className='partner-img'><Image src={Brand4} alt="Brand4"/></div></li>
                <li><div className='partner-img'><Image src={Brand5} alt="Brand5"/></div></li>
                <li><div className='partner-img'><Image src={Brand6} alt="Brand6"/></div></li>
                <li><div className='partner-img'><Image src={Brand7} alt="Brand7"/></div></li>
                <li><div className='partner-img'><Image src={Brand8} alt="Brand8"/></div></li>
                <li><div className='partner-img'><Image src={Brand9} alt="Brand9"/></div></li>
                <li><div className='partner-img'><Image src={Brand10} alt="Brand10"/></div></li>
                <li><div className='partner-img'><Image src={Brand11} alt="Brand11"/></div></li>
                <li><div className='partner-img'><Image src={Brand12} alt="Brand12"/></div></li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Partners;