import React from "react"
import Header from './header'
import Footer from './footer'

const WalletLayout = (props) => {
  return (
    <>
      <div className='main-body'>
        <Header />
          {props.children}
        <Footer />
      </div>
    </>
  )
}

export default WalletLayout;