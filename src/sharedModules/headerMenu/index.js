import React from "react";
import logo from "../../images/logo-head.svg";
import Button from "react-bootstrap/Button";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import NavDropdown from "react-bootstrap/NavDropdown";

const Index = () => {
  const toggleMenu = (e) => {
    // console.log('ji', e.currentTarget.parentElement.find('.burger-container'),e)
    document.body.classList.toggle("menuActive");
  };
  return (
    <Navbar collapseOnSelect className="full-menu" expand="md">
      <Container className="align-items-baseline mobile_menu">
        <Navbar.Brand href="/">
          <Image src={logo} fluid className="w-100"></Image>
        </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" className="burger-container" onClick={toggleMenu}>
          <div class="burger">
            <div class="bar topBar"></div>
            <div class="bar btmBar"></div>
          </div>
        </Navbar.Toggle> */}
        {/* <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Story</Nav.Link>
            <Nav.Link href="/">DeLot</Nav.Link>
            <NavDropdown title="Collections" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/doge">Doge is the New Gold</NavDropdown.Item>
              <NavDropdown.Item href="/houseOfDoge">House Of Doge</NavDropdown.Item>
              <NavDropdown.Item href="/HouseOfShiba">House Of Shiba</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/">Whitepaper</Nav.Link>
            <Nav.Link href="/">Roadmap</Nav.Link>
            <Nav.Link href="/">FAQs</Nav.Link>
            <div className="btn-wrapper d-block d-md-none mt-4">
              <Button variant="theme" className="w-100"><span>JOIN WHITELIST</span></Button>
            </div>
          </Nav>
        </Navbar.Collapse> */}
        <Button variant="theme-outline">JOIN WHITELIST</Button>
      </Container>
    </Navbar>
  );
};

export default Index;
