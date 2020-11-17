import React from "react";
import { ImgZooeWrap } from './StyledGoodDetail'


function ImgZooe(props) {
  return (
    <ImgZooeWrap {...props}>
      <img src={props.img} alt="" />
    </ImgZooeWrap>
  );
}

export default ImgZooe;
