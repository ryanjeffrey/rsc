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
        <div className="caya-testimonial">
          <p className="testimonial">
            “Partnering with RSC Creative for my custom website was one of the 
            <span> best business decisions I have ever made.</span> I wasn’t sure what I wanted
            my website to look like, but RSC gave me multiple color palettes and
            design mockups from which to choose. I ended up with a <span>beautiful
            website</span> that <span>grew my startup</span> into a full private practice.”
          </p>
          <StaticImage
            src="../assets/images/drcornick.jpg"
            alt=""
            style={{ zIndex: -1 }}
            className="testimonial-image"
          />
          <p className="testimonial-name">Courtney R. Cornick, PhD</p>
        </div>
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
