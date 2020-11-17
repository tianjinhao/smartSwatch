import React from 'react';
import { HotSaleWrap } from './StyledTHome'
import CateTitle from '@c/Thome/CateTitle'
import Cate from '@c/Thome/Cate'
import CateList from '@c/Thome/CateList'

import hotImg from '@a/images/home/hot/热卖.png'



class Hotsale extends React.Component {
  state={
    type: this.props.hotType
  }

  

  

  render() {
    return (
      <HotSaleWrap>
        <CateTitle title="热卖推荐" pic={hotImg}></CateTitle>
        <Cate onHotSwitch={this.props.onHotSwitch} type={this.props.hotType}></Cate>
        <CateList hotSaleData={this.props.hotSaleData} type={this.props.hotType}></CateList>
      </HotSaleWrap>
    );
  }
}

export default Hotsale;