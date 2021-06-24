import React from 'react';
import Design from "../assets/images/design.jpg";
import Dev from "../assets/images/dev.jpg";

const Cards = () => {
    return (
      <div className="cards-container">
        <div className="card">
          <h4>Design</h4>
          <img src={Design} alt="" />
          <p>
            Whether you have a logo and color palette or you are starting from
            scratch, we love to work with clients to create a color story that
            fits your brand and has a powerful impact on your clients.
          </p>
        </div>
        <div className="card">
          <h4>Develop</h4>
          <img src={Dev} alt=""/>
          <p>
            Got a web design ready to go, but you just need a developer to make
            your design come to life? <br /> We got you.
            <br /> Starting from scratch and the sight of code makes you
            shudder? <br /> We also got you.
          </p>
        </div>
      </div>
    )
}

export default Cards
