import React from "react";
import { Switch, Route, Redirect } from 'react-router-dom'

import { OrderWrap } from "./StyledTbuy";
import { Breadcrumb } from "antd";
import ConfirmOrder from './ConfirmOrder/ConfirmOrder'
import CompleteOrder from './ConfirmOrder/CompleteOrder'
import NullCart  from './ConfirmOrder/NullCart'

class Order extends React.Component {
  
  render() {
    return (
      <OrderWrap>
        <div className="confirm_order">
          <div className="confirm_order_header">
            <Breadcrumb separator=">">
              <Breadcrumb.Item>购物车</Breadcrumb.Item>
              <Breadcrumb.Item>确认订单</Breadcrumb.Item>
              <Breadcrumb.Item>在线支付</Breadcrumb.Item>
              <Breadcrumb.Item>完成</Breadcrumb.Item>
            </Breadcrumb>
            <span>我的订单</span>
          </div>
          <Switch>
            <Route path="/home/order/confirmorder" component={ConfirmOrder}></Route>
            <Route path="/home/order/completeorder" component={CompleteOrder}></Route>
            <Route path="/home/order/nullcart" component={NullCart}></Route>
            <Redirect from="/home/order" to="/home/order/confirmorder" ></Redirect>
          </Switch>
        </div>
      </OrderWrap>
    );
  }
}

export default Order;
