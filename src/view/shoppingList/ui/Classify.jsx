import React, { Component } from 'react';
import {TwoEl} from './listStyle.js'
import Product from './Product'
class Classify extends Component {
  render() {
    return (
      <TwoEl>
        <p className='classify'>分类:</p>
        <span>全部</span>
        <Product></Product>
      </TwoEl>
    );
  }
}

export default Classify;