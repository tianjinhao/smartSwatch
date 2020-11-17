import React, { Component } from 'react';

import HeadStyle from '../ui/ConentHeader'
import CartBody from '../ui/CartBody'
import {CartStyle} from '../ui/styledCart'

 
 

class ShoppingCart extends Component {

  state = {
    Htitle:'购物车'
  }
  headerChange=()=>{
    console.log("123123123123");
  }
  render() {
    return (
    <CartStyle>
      <HeadStyle data={this.state.Htitle}>
      </HeadStyle>
      <CartBody changestate={this.handerChange} data={'12312312'}>
      </CartBody>
    </CartStyle>
    );
  }

  
}

export default ShoppingCart;
