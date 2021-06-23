import React, {Component} from 'react';
import { StaticImage } from "gatsby-plugin-image";
import {Transition} from 'react-transition-group';

class Hero extends Component {
  render() {
    return (
      <Transition timeout={4000} in={true} appear>
        {status => (
          <div className={`box box-${status}`}>
            <h1 className="heading-1-large load-1st">We make websites that make you more money.</h1>
            <StaticImage
              src="../assets/images/stack.jpg"
              alt=""
              style={{ zIndex: -1 }}
              placeholder="blurred"
            />
          </div>
        )}
      </Transition>
    )
  }
}

export default Hero
