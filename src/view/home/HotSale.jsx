import React from 'react';
import { HotSaleWrap } from './StyledTHome'
import CateTitle from '@c/Thome/CateTitle'
import Cate from '@c/Thome/Cate'
import CateList from '@c/Thome/CateList'

import hotImg from '@a/images/home/hot/热卖.png'



function Hotsale(props) {
  return (
    <HotSaleWrap>
      <CateTitle title="热卖推荐" pic={hotImg}></CateTitle>
      <Cate></Cate>
      <CateList></CateList>
    </HotSaleWrap>
  );
}

export default Hotsale;