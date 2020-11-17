import React from "react";
import { NullCartWrap } from '../StyledOrder'
function NullCart(props) {
  return (
    <NullCartWrap>
      <div className="null_cart_logo"></div>
      <div className="null_cart_info">
        <p>购物车内还没有商品，赶快选购吧~</p>
        <p>返回商城首页</p>
      </div>
    </NullCartWrap>
  );
}

export default NullCart;
