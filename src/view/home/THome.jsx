import React, { Component } from 'react';
import { THomeWrap } from './StyledTHome'

import TSwiper from '@c/TSwiper/TSwiper'
import HotSale from './HotSale'
import NewZone from './NewZone'
import Parts from './Parts'
import VideoZone from './videoZone/VideoZone'
import Bracelet from './Bracelet'

class THome extends Component {
  render() {
    return (
      <THomeWrap>
          {/* 轮播图 */}
          <TSwiper></TSwiper>
          {/* 热卖板块 */}
          <HotSale></HotSale>
          {/* 新品专区 */}
          <NewZone></NewZone>
          {/* 配件专卖 */}
          <Parts></Parts>
          {/* 视频专区 */}
          <VideoZone></VideoZone>
          {/* 智能手环 */}
          <Bracelet></Bracelet>
      </THomeWrap>
    );
  }
}

export default THome;