import React from "react"
import Navbar from "./Navbar"
import { Helmet } from "react-helmet"

import "normalize.css"
import "../assets/css/main.css"

const Layout = ({ children }) => {
  return (
    <div className="layout-wrapper">
      <Helmet htmlAttributes={{ lang: "en" }}>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="RSC Creative designs and develops beautiful and blazing-fast websites."
        />
        <title>RSC Creative</title>
      </Helmet>
      <div>
        <Navbar />
        {children}
      </div>
    </div>
  )
}

export default Layout
