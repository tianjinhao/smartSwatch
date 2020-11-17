import React, { useState, useEffect } from "react";
import { CateListWrap } from "./StyledThomeNav";
import CateItem from './CateItem'

import sportImg from "@a/images/home/hot/运动周边/热卖-运动周边-1.png";
import watchImg from "@a/images/home/hot/手表/热卖-手表-1.png";
import wristImg from "@a/images/home/hot/手环/热卖-手环-1.png";

function CateList(props) {
  const [showImg, setShowImg] = useState(sportImg)
  useEffect(() => {
    switch(props.type) {
      case "watch" :
        return setShowImg(watchImg)
      case "wrist" :
        return setShowImg(wristImg)
      case "sports" :
        return setShowImg(sportImg)
      default: 
        return
    }
  }, [props.type])
  // console.log(props);
  return (
    <CateListWrap>
      <div className="cate-list">
        <ul>
          <li>
            <img src={showImg} alt="" />
          </li>

          {
            props.hotSaleData.map((item) => {
              return <CateItem 
                        key={item.commodityId}
                        value={item}
                      ></CateItem>
            })
          }

          
          
        </ul>
      </div>
    </CateListWrap>
  );
}

export default CateList;
