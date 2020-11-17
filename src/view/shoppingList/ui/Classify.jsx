import React from 'react';
import {TwoEl} from './listStyle.js'
import Product from './Product'
function Classify(props) {
  return (
    <TwoEl>
      <p className='classify'>分类:</p>
      <span>全部</span>
      <Product></Product>
    </TwoEl>
  )
}


export default Classify;