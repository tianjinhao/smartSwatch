import React from "react";
import { CateWrap } from "./StyledThomeNav";

import more from "@a/images/home/hot/探索更多-箭头.png";

function Cate(props) {
  const { type, onHotSwitch } = props;
  return (
    <CateWrap>
      <div className="home-cate">
        <ul>
          <li
            className={type === "watch" ? "active" : ""}
            onClick={onHotSwitch("watch")}
          >
            手表
          </li>
          <li
            className={type === "wrist" ? "active" : ""}
            onClick={onHotSwitch("wrist")}
          >
            手环
          </li>
          <li
            className={type === "sports" ? "active" : ""}
            onClick={onHotSwitch("sports")}
          >
            运动周边
          </li>
          {/* <li className="slide"></li> */}
          <li className={type === "wrist" ? "slide middle" : type === "sports" ? "slide right" : "slide"}></li>
        </ul>
        <i>|</i>
        <span>
          探索更多
          <img src={more} alt="" />
        </span>
      </div>
    </CateWrap>
  );
}

export default Cate;
