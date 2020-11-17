import React, { useCallback } from "react";
import { useHistory } from 'react-router-dom'

import { CateItemWrap } from "./StyledTHome";
function CateItem(props) {
  const history = useHistory()

  const toGoodDetail = useCallback(
    () => {
      history.push('/gooddetail')
    },
    [history]
  )

  return (
      <CateItemWrap>
        <div className="tags">
          {/* <span className="seckill">秒杀</span> */}
          <span className="hotcakes">新品</span>
        </div>
        <div className="good_img">
          <img src={props.item.imageUrl} alt="" />
          <span></span>
        </div>
        <div className="good_info">
          <p>{props.item.commodityName}</p>
          <p>
            {
              props.item.describe.map((item, index) => {
                if(index === props.item.describe.length - 1){
                  return item
                }
                return item + "丨"
              })
            }
          </p>
          <p>{props.item.commodityPrice} 元</p>
        </div>
        <div className="shade">
          <div >点击探索</div>
          <div onClick={toGoodDetail}>立即购买</div>
        </div>
      </CateItemWrap>
  );
}

export default CateItem;
