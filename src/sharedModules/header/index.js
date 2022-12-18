import React from "react";
import logo from '../../images/logo-head.png';
import Button from 'react-bootstrap/Button';

const Index = () => {
  return (
    <header>
      <div className="container container-sm">
        <div className="row align-items-center">
          <div className="col-4">
            <div className="nabvar-brand">
              <a href="/">
                <img src={logo} alt="logo"/>
              </a>
            </div>
          </div>
          <div className="col-8 text-right">
            <Button variant="theme-outline">CONNECT WALLET</Button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Index;