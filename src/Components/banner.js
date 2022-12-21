import React from "react";
import bannerImage from "../images/banner.jpg";
import Coin from "../images/coin.png";
import Wolf from "../images/videos/bannerWolf.gif";
import { Container, Row, Button, Col, Image } from "react-bootstrap";

const Banner = () => {
  return (
    <div className="header-banner" style={{ marginTop: "2rem" }}>
      <div className="banner-bg">
        <Image src={bannerImage} alt="bannerImage" />
        {/* <video loop={true} autoPlay="autoPlay" muted playsInline>
          <source src={bannerVideo} type="video/mp4" />
          <source src={bannerVideoMov} type="video/mov" />
          Your browser does not support the video tag.
        </video> */}
      </div>
      <div className="banner-desc">
        <Container>
          <Row>
            <Col lg={5} xl={4} md={6}>
              <div className="content mb-5">
                <div className="heading mb-2">
                  <h2>Lorem ipsum dolor sit amet consect</h2>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore
                </p>
              </div>
              <Button variant="theme" className="join_whitelist">
                JOIN WHITELIST
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="banner-wolf">
        <Container fluid>
          <Row className="justify-content-end">
            <Col lg={8} md={6} className="position-relative">
              <Image src={Coin} alt="coin" fluid />
              <Image src={Wolf} alt="coin" fluid className="wolf-image" />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Banner;
