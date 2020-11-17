import React from "react";
import { PartsWrap } from "./StyledTHome";
import CateTitle from "@c/Thome/CateTitle";
import accImg from "@a/images/home/hot/配件-icon.png";
import banner from "@a/images/home/parts/banner.png";
function Parts(props) {
  return (
    <>
      <CateTitle title="配件专卖" pic={accImg}></CateTitle>

      <PartsWrap>
        <div className="parts">
          <div className="parts_left">
            <img src={banner} alt="" />
          </div>
          <ul className="parts_right">
            {props.partsData.map((item) => {
              return (
                <li key={item.commodityId} >
                  <div className="parts_img">
                    <img src={item.imageUrl} alt="" />
                  </div>
                  <div className="parts_info">
                    <p>{item.commodityName}</p>
                    <p>
                      {item.describe.map((i, index) => {
                        if (index === item.describe.length - 1) {
                          return i;
                        }
                        return item + "丨";
                      })}
                    </p>
                    <p>{item.commodityPrice} 元</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </PartsWrap>
      <CateTitle title="视频专区" pic={accImg}></CateTitle>
    </>
  );
}

export default Parts;
