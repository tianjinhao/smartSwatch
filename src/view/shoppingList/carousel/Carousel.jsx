import React, { Component } from 'react';

import {Carousel} from 'element-react'
import {Img} from './carousel.js'
import img1 from './img/aa.jpg'
import 'element-theme-default';
class Carousels extends Component {
  render() {
    return (
      <Img>
        <Carousel 
          interval="5000"
          arrow="always" 
          height="757px"
          >
          <Carousel.Item><div><img src={img1} alt=" "/></div></Carousel.Item>
          <Carousel.Item><div><img src={img1} alt=" "/></div></Carousel.Item>
          <Carousel.Item><div><img src={img1} alt=" "/></div></Carousel.Item>
          <Carousel.Item><div><img src={img1} alt=" "/></div></Carousel.Item>
        </Carousel>
    </Img>
    );
  }
}

export default Carousels;