import React from "react";
import Charged from '../../images/videos/supercharged.mp4';
// import BgVideo from '../../images/videos/SGLCrash.mp4'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button';
import WalletLayout from '../../sharedModules/walletLayout'


const Mint = () => {
  return (
    <WalletLayout>
      {/* <div className="bg-video">
        <video loop={true}="true" autoPlay="autoPlay" muted>
          <source src={BgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div> */}
      {/* video-layout */}
      <div className="buy-nft">
        <div className="buy-section">
          <div className="buy-body">
            <div className="container container-sm">
              <div className="row">
                <div className="col-12">
                  <div className="heading text-center">
                    <h2 className="dark">MINT YOUR NFT</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="nft-img-sec">
                    {/* <img src={logo} alt="nft" className="img-fluid"/> */}
                    <video loop={true} autoPlay="autoPlay" muted>
                      <source src={Charged} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="buyDesc">
                    <ul className="f-figures">
                      <li>
                        <p>STATUS</p>
                        <p>STARTING IN 12 DAYS</p>
                      </li>
                      <li>
                        <p>PRICE</p>
                        <p>0.06 ETH</p>
                      </li>
                    </ul>
                    <div className="buyCalculator">
                      <p>1000 Remaining</p>
                      <div className="progress mb-3">
                        <div className="progress-bar" role="progressbar" style={{width: "10%"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <p className="dim">How many NFT's to mint?</p>
                      <div className="buyCounter">
                        <button><FontAwesomeIcon icon={faMinus} /></button>
                        <input type="text" min-value="1" value="1" />
                        <button><FontAwesomeIcon icon={faPlus} /></button>                  
                      </div>
                      <div className="d-grid gap-2">
                        <Button variant="theme" size="lg" className="btn-block">MINT NOW</Button>                    
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </WalletLayout>
  )
}

export default Mint;