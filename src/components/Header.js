import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Header = () => {
  return (
    <div className="logo">
      <StaticImage
        src="../assets/images/rsc.jpg"
        alt=""
        style={{ zIndex: -1 }}
      />
    </div>
  )
}

export default Header
