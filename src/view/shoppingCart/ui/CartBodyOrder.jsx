import React, { Component } from 'react';
import {OrderWarp} from './styledCart'
import { Table } from 'antd';

const columns = [
  {
    title: '我的物流',
    dataIndex: 'logInfo',
    render: () =>
    <div className='logbox'>
      <img src="" alt=""/>
      <div className='description'>
        <span className='productName'>智能运动手表</span>
        <span className='producttitle'>黑色不锈钢TPU材质</span>
      </div>
    </div>
  },
  {
    title: '订单明细',
    dataIndex: 'detail',
    render: () =>
    <div className='detailsMenuItem'>
      <span>地址：北京市  快件已在北京快递点签收...</span>
      <span>签收人：玖玖</span>
      <span>订单编号： 406568579900597859</span>
      <span>2019-03-05    13:24:34</span>
    </div>
  },
  {
    title: '金额',
    dataIndex: 'price',
    render: ()=>
    <>
      <span>￥534 x 1</span>
    </>
  },
  {
    title: '状态',
    dataIndex: 'state',
    render:() =>
    <div className='itemStatus'><span>取消订单</span><span>付款</span></div>
  },

];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}
class CartBodyOrder extends Component {
  render() {
    return (
    <OrderWarp>
      <div className="orderHeader">
        <span>全部订单</span>
        <div></div>
        <span>待付款</span>
        <div></div>
        <span>代发货</span>
        <div></div>
        <span>已发货</span>
        <div></div>
        <span>待评价</span>
      </div>
        <Table columns={columns}  dataSource={data} 
        pagination={{ defaultPageSize:4 }}
        />
    </OrderWarp>
    );
  }
}

export default CartBodyOrder;