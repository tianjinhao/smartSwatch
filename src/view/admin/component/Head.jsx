import React, { Component } from 'react';

import Logo from './images/logo.png'

import {
  StyleHead
} from './StyledAdmin'


export default class Head extends Component {
  render() {
    return (
      <div style={{ width: "1300px", margin: "0 auto", position: "relative" }}>
        <StyleHead>
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
        </StyleHead>
      </div>

    );
  }
}
