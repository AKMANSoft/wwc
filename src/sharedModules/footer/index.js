import React from "react";
import logo from '../../images/logo-footer.svg';
import Discord from '../../images/discord.svg';
import Twitter from '../../images/twitter.svg';
import Instagram from '../../images/instagram.svg';
import Facebook from '../../images/facebook.svg';
import Message from '../../images/message.svg';

const Index = () => {
  return (
    <footer>
      <div className="container container-sm">
        <div className="row align-items-end">
          <div className="col-md-3 order-md-0 order-2">
            <p>© 2022, World Wide Crypto</p>
          </div>
          <div className="col-md-5 order-md-1 order-0 text-center">
            <a href="#" className="footer-logo"><img src={logo} alt="logo" className="img-fluid"/></a>
          </div>
          <div className="col-md-4 order-md-2 order-1 my-md-0 my-4">
            <ul className="social-media-list">
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