import React from 'react';
import { Fade } from 'react-slideshow-image' ;

import './slideshow.css' ;
import im1 from '../img/m1.png' ;
import im2 from '../img/m2.png' ;
import im3 from '../img/m3.png' ;

// This component requires ' npm i react-slideshow-image -S ' to work 

// images must be 945 X 420 with white margin of 405 on right total (1350 X 420)

const fadeImages = [
  im1,
  im2,
  im3
];
 
const fadeProperties = {
  duration: 3000,
  transitionDuration: 500,
  infinite: true,
  indicators: true
}

const SlideShow = () => {
  return (
    <Fade {...fadeProperties}>
      <div className="each-fade">
        <div className="image-container">
          <img src={fadeImages[0]} alt="img-1"/>
        </div>
      </div>
      <div className="each-fade">
        <div className="image-container">
          <img src={fadeImages[1]} alt="img-2"/>
        </div>
      </div>
      <div className="each-fade">
        <div className="image-container">
          <img src={fadeImages[2]} alt="img-3"/>
        </div>
      </div>
    </Fade>
  )
}

export default SlideShow ;