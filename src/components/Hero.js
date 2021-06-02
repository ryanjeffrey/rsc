import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

const Hero = () => {
    return (
      <div className="hero-section">
        <h1 className="heading-1-large load-1st">Beautiful design.</h1>
        <h2 className="heading-1-large load-2nd">Eloquent development.</h2>
        <h2 className="heading-1-large load-3rd">Dope websites.</h2>
        <StaticImage
          src="../assets/images/stack.jpg"
          alt=""
          style={{ zIndex: -1 }}
          placeholder="tracedSVG"
        />
      </div>
    )
}

export default Hero
