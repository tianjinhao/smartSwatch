import React, { useCallback } from "react";
import { useHistory } from 'react-router-dom'

import { CateItemWrap } from "./StyledThomeNav";
function CateItem(props) {
  const history = useHistory()

  const toGoodDetail = useCallback(
    (value) => {
      return () => {
        history.push('/gooddetail', {value})
      }
    },
    [history]
  )

  return (
      <CateItemWrap onClick={toGoodDetail(props.value)}>
        <div className="tags">
          {/* <span className="seckill">秒杀</span> */}
          <span className="hotcakes">热销</span>
        </div>
        <div className="good_img">
          <img src={props.value.imageUrl} alt="" />
          <span></span>
        </div>
        <div className="good_info">
          <p>{props.value.commodityName}</p>
          <p>
            {
              props.value.describe.map((item, index) => {
                if(index === props.value.describe.length - 1){
                  return item
                }
                return item + "丨"
              })
            }
          </p>
          <p>{props.value.commodityPrice} 元</p>
        </div>
      </CateItemWrap>
  );
}

export default CateItem;
