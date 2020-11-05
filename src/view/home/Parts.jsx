import React from 'react';
import { PartsWrap }  from './StyledTHome'
import CateTitle from "@c/Thome/CateTitle";
import accImg from "@a/images/home/hot/配件-icon.png";
import parts2 from "@a/images/home/parts/配件-2.png";
import banner from "@a/images/home/parts/banner.png";
function Parts(props) {
  return (
    <>
      <CateTitle title="配件专卖" pic={accImg}></CateTitle>
      
      <PartsWrap>
        <div className="parts">
          <div className="parts_left">
            <img src={banner} alt=""/>
          </div>
          <ul className="parts_right">
            <li>
              <div className="parts_img">
                <img src={parts2} alt=""/>
              </div>
              <div className="parts_info">
                <p>轻量保暖抓绒外套</p>
                <p>远离起球丨防寒保暖丨轻量舒适</p>
                <p>299元</p>
              </div>
            </li>
            <li>
              <div className="parts_img">
                <img src={parts2} alt=""/>
              </div>
              <div className="parts_info">
                <p>轻量保暖抓绒外套</p>
                <p>远离起球丨防寒保暖丨轻量舒适</p>
                <p>299元</p>
              </div>
            </li>
            <li>
              <div className="parts_img">
                <img src={parts2} alt=""/>
              </div>
              <div className="parts_info">
                <p>轻量保暖抓绒外套</p>
                <p>远离起球丨防寒保暖丨轻量舒适</p>
                <p>299元</p>
              </div>
            </li>
            <li>
              <div className="parts_img">
                <img src={parts2} alt=""/>
              </div>
              <div className="parts_info">
                <p>轻量保暖抓绒外套</p>
                <p>远离起球丨防寒保暖丨轻量舒适</p>
                <p>299元</p>
              </div>
            </li>
            
          </ul>
        </div>
        
      </PartsWrap>
      <CateTitle title="视频专区" pic={accImg}></CateTitle>
    </>
  );
}

export default Parts;