import React, { Component } from 'react';
import HomePage from './HomePage.jsx'
import Classify from './Classify.jsx'
import {ShopContain} from './listStyle.js'
import Sort from './Sort'
import ShopList from './ShopList'
class TotalBan extends Component {
  render() {
    return (
      <ShopContain>
        <HomePage></HomePage>
        <Classify></Classify>
        <Sort></Sort>
        <ShopList></ShopList>
      </ShopContain>
    );
  }
}

export default TotalBan;