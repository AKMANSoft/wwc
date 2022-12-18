import React from "react"
import HeaderMenu from './headerMenu'
import FooterMenu from './footerMenu'
class DefaultLayout extends React.Component {
  render(){
    return (
      <div className="default-layout">
        <HeaderMenu />
          <main className={this.props.additionalClass}>{this.props.children}</main>
        <FooterMenu />
      </div>
    )
  }
}
export default DefaultLayout;