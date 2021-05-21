import React from 'react';
import Wheel from "../assets/images/wheel.png";
import Code from "../assets/images/code.png";

const Cards = () => {
    return (
      <div className="cards-container">
        <h3>What We Love To Do:</h3>
        <div className="card">
          <img src={Wheel} />
          <h4>Design</h4>
          <p>
            Whether you have a logo and color palette or you are starting from
            scratch, we love to work with clients to create a color story that
            fits your brand and has a powerful impact on your clients.
          </p>
        </div>
        <div className="card">
          <img src={Code} />
          <h4>Develop</h4>
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
