import React, { useCallback } from "react";
import { useHistory } from 'react-router-dom'

import { CateItemWrap } from "./StyledThomeNav";
import sport2 from "@a/images/home/hot/运动周边/热卖-运动周边-2.png";
function CateItem(props) {
  const history = useHistory()

  const toGoodDetail = useCallback(
    () => {
      history.push('/gooddetail')
    },
    [history]
  )

  return (
      <CateItemWrap onClick={toGoodDetail}>
        <div className="tags">
          {/* <span className="seckill">秒杀</span> */}
          <span className="hotcakes">热销</span>
        </div>
        <div className="good_img">
          <img src={sport2} alt="" />
          <span></span>
        </div>
        <div className="good_info">
          <p>轻量保暖抓绒外套</p>
          <p>远离起球丨防寒保暖丨轻量舒适</p>
          <p>299元</p>
        </div>
      </CateItemWrap>
  );
}

export default CateItem;
