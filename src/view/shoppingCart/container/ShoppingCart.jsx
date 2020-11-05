import React, { Component } from 'react';

import HeadStyle from '../ui/ConentHeader'
import CartBody from '../ui/CartBody'
import {CartStyle} from '../ui/styledCart'
class ShoppingCart extends Component {
  render() {
    return (
    <CartStyle>
      <HeadStyle>
      </HeadStyle>
      <CartBody>
      </CartBody>
    </CartStyle>
    );
  }
}

export default ShoppingCart;
