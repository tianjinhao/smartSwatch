import React from 'react';
import { CateWrap } from './StyledThomeNav'

import more from '@a/images/home/hot/探索更多-箭头.png'

function Cate(props) {
  return (
    <CateWrap>
      <div className="home-cate">
        <div>
          <span>手表</span>
          <span>手环</span>
          <span className="active">运动周边</span><i>|</i><span>探索更多<img src={more} alt=""/></span>
        </div>
      </div>
    </CateWrap>
  );
}

export default Cate;