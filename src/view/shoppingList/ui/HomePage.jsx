import React, { Component } from 'react';
import {FirstEl} from './listStyle.js'
class HomePage extends Component {
  render() {
    return (
      <FirstEl>
        <span>首页</span>
          &gt;
        <span>商城</span>
      </FirstEl>
    );
  }
}

export default HomePage;