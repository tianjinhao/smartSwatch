import React from 'react';
import Carousel from '../carousel/Carousel.jsx'
import {ShopHead} from './shop.js'
import TotalBan from '../ui//TotalBan.jsx'


function ShopContainer(props) {
  return (
    <ShopHead>
      <Carousel></Carousel>
      <TotalBan></TotalBan>
  </ShopHead>
  );
}

export default ShopContainer;