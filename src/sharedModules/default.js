import React from "react"
import HeaderMenu from './headerMenu'
import FooterMenu from './footerMenu'

const DefaultLayout = (props) => {
  return (
    <div className="default-layout">
      <HeaderMenu />
      <main className={props.additionalClass}>{props.children}</main>
      <FooterMenu />
    </div>
  )
}

export default DefaultLayout;