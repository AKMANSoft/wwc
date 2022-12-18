import React from "react";
import logo from '../../images/joinWhitelist.png';
import Discord from '../../images/discord.png';
import Twitter from '../../images/twitter.png';
import Instagram from '../../images/instagram.png';
import Facebook from '../../images/facebook.png';
import Message from '../../images/message.png';
import Button from 'react-bootstrap/Button';

const Index = () => {
  return (
    <footer className="pageFooter">
      <div className="container container-sm">
        <div className="row">
          <div className="col-md-12 text-center">
            <a href="#" className="footer-logo"><img src={logo} alt="logo" className="img-fluid"/></a>
          </div>
          <div className="col-md-12 text-center mt-3 mb-5">
            <Button variant="theme-outline"><span>JOIN WHITELIST</span></Button>
          </div>
          <div className="col-md-12">
            <ul className="social-media-list justify-content-center">
              <li><a href="#"><img src={Discord} alt="logo"/></a></li>
              <li><a href="#"><img src={Twitter} alt="logo"/></a></li>
              <li><a href="#"><img src={Instagram} alt="logo"/></a></li>
              <li><a href="#"><img src={Facebook} alt="logo"/></a></li>
              <li><a href="#"><img src={Message} alt="logo"/></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Index;