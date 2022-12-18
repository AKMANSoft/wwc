import React from "react"
import Header from './header'
import Footer from './footer'
class WalletLayout extends React.Component {
  render(){
    return (
      <>
        <div className='main-body'>
          <Header />
            {this.props.children}
          <Footer />
        </div>
      </>
    )
  }
}
export default WalletLayout;