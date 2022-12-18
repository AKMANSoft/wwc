import React from "react";
import {Container, Row, Button, Col, Image} from 'react-bootstrap';
import "../css/slick.min.css";
import Slider from "react-slick";


const InnerBanner = (props) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    variableWidth: true,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear"
  }
  return (
    <div className="whiteList">
      <div className="whiteList-section">
        <div className="coming-soon">
          <div className='coming-soon-stripe'>
            <Slider {...settings}>
              <p>Mint Coming Soon</p>
              <p>Whitelist for first access</p>
              <p>Mint Coming Soon</p>
              <p>Whitelist for first access</p>
              <p>Mint Coming Soon</p>
              <p>Whitelist for first access</p>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InnerBanner;