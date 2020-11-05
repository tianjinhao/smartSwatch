import React, { Component } from 'react';
import { CateTitleWrap } from './StyledThomeNav'


class CateTitle extends Component {
  render() {
    return (
      <CateTitleWrap>
        <div>
          <span>{this.props.title}</span>
          <img src={this.props.pic} alt=""/>
        </div>
      </CateTitleWrap>
    );
  }
}

export default CateTitle;