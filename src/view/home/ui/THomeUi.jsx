import React, { Component } from 'react';
import { THomeWrap } from './StyledTHome'

import TSwiper from '@c/TSwiper/TSwiper'
import HotSale from './HotSale'
import NewZone from './NewZone'
import Parts from './Parts'
import VideoZone from './videoZone/VideoZone'
import Bracelet from './Bracelet'

class THomeUi extends Component {
  render() {
    return (
      <THomeWrap>
          {/* 轮播图 */}
          <TSwiper swiperData={this.props.swiperData}></TSwiper>
          {/* 热卖板块 */}
          <HotSale hotSaleData={this.props.hotSaleData} hotType={this.props.hotType} onHotSwitch={this.props.onHotSwitch}></HotSale>
          {/* 新品专区 */}
          <NewZone newZoneData={this.props.newZoneData} ></NewZone>
          {/* 配件专卖 */}
          <Parts partsData={this.props.partsData}></Parts>
          {/* 视频专区 */}
          <VideoZone></VideoZone>
          {/* 智能手环 */}
          <Bracelet></Bracelet>
      </THomeWrap>
    );
  }
}

export default THomeUi;