import React from "react";
import { ImgZooeWrap } from './StyledTbuy'


function ImgZooe(props) {
  return (
    <ImgZooeWrap {...props}>
      <img src={props.img} alt="" />
      <span></span>
    </ImgZooeWrap>
  );
}

export default ImgZooe;
