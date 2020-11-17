import React from 'react';
import { CompleteOrderWrap } from '../StyledOrder'
import { Link } from 'react-router-dom'

function CompleteOrder(props) {
  return (
    <CompleteOrderWrap className="complete_order_wrap">
    <div className="complete_order">
      <div className="complete_logo"></div>
      <div className="complete_order_info">
        <p>恭喜，购买成功</p>
        <p>
          货物地址：辽宁省大连市旅顺口区旅顺经济开发区大连交通大学216号
        </p>
        <Link to="/home"><p>返回首页</p></Link>
      </div>
    </div>
  </CompleteOrderWrap>
  );
}

export default CompleteOrder;