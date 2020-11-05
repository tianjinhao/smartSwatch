import React from "react";
import { CateListWrap } from "./StyledThomeNav";
import CateItem from './CateItem'

import sport1 from "@a/images/home/hot/运动周边/热卖-运动周边-1.png";
// import sport2 from "@a/images/home/hot/运动周边/热卖-运动周边-2.png";
// import sport3 from "@a/images/home/hot/运动周边/热卖-运动周边-3.png";
// import sport4 from "@a/images/home/hot/运动周边/热卖-运动周边-4.png";
// import sport5 from "@a/images/home/hot/运动周边/热卖-运动周边-5.png";
// import sport6 from "@a/images/home/hot/运动周边/热卖-运动周边-6.png";
// import sport7 from "@a/images/home/hot/运动周边/热卖-运动周边-7.png";

function CateList(props) {
  return (
    <CateListWrap>
      <div className="cate-list">
        <ul>
          <li>
            <img src={sport1} alt="" />
          </li>
          <CateItem></CateItem>
          <CateItem></CateItem>
          <CateItem></CateItem>
          <CateItem></CateItem>
          <CateItem></CateItem>
          <CateItem></CateItem>
          
        </ul>
      </div>
    </CateListWrap>
  );
}

export default CateList;
