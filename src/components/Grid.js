import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

const Grid = () => {
    return (
      <div className="container">
        <StaticImage
          src="../assets/images/tile-1.jpg"
          alt=""
          style={{ zIndex: -1 }}
        />
        <StaticImage
          src="../assets/images/tile-2.jpg"
          alt=""
          style={{ zIndex: -1 }}
        />
        <StaticImage
          src="../assets/images/tile-3.jpg"
          alt=""
          style={{ zIndex: -1 }}
        />
      </div>
    )
}

export default Grid
