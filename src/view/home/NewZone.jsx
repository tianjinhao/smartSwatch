import React from "react";

import { NewZoneWrap } from "./StyledTHome";

import CateTitle from "@c/Thome/CateTitle";
import newImg from "@a/images/home/hot/新品专区-1.png";
import Cate from "@c/Thome/Cate";
import CateItem from '@c/Thome/CateItem'

import { Carousel } from "element-react";



function NewZone(props) {
  return (
    <>
      <CateTitle title="新品专区" pic={newImg}></CateTitle>
      <Cate></Cate>
      <NewZoneWrap>
        <Carousel >
          <Carousel.Item >
            <div className="new_list">
              <ul>
                <CateItem></CateItem>
                <CateItem></CateItem>
                <CateItem></CateItem>
              </ul>
            </div>
          </Carousel.Item>
          <Carousel.Item >
            <div className="new_list">
              <ul>
                <CateItem></CateItem>
                <CateItem></CateItem>
                <CateItem></CateItem>
              </ul>
            </div>
          </Carousel.Item>
          <Carousel.Item >
            <div className="new_list">
              <ul>
                <CateItem></CateItem>
                <CateItem></CateItem>
                <CateItem></CateItem>
              </ul>
            </div>
          </Carousel.Item>
          
          
        </Carousel>
      </NewZoneWrap>
    </>
  );
}

export default NewZone;
