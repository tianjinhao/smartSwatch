import { Table } from 'antd';
import React, { Component } from 'react';
import {CartWarp} from './styledCart'
const columns = [
  {
    title: '全选',
    dataIndex: 'checkAll',
    render: () =>
    <>
      <div className='tabicon'></div>
      <img src="" alt=""/>
      <div className='description'>
        <span className='productName'>智能运动手表</span>
        <span className='producttitle'>蓝牙听歌|索尼28纳米GPS</span>
      </div>
    </>
  },
  {
    title: '单价（元）',
    dataIndex: 'price',
    render: () =><span className='price'>￥599</span>
  },
  {
    title: '数量',
    dataIndex: 'num',
    render: ()=>
    <>
      <div className='productPrice'>
        <button style={{backgroundPosition:'-78px -82px'}}></button>
        <input type="text"/>
        <button style={{backgroundPosition:'-78px -115px'}}  ></button>
      </div>
    </>
  },
  {
    title: '小件（元）',
    dataIndex: 'total',
    render:() =>
    <div className='total'><div></div><p>599</p></div>
  },
  {
    title: '完成',
    key: 'operation',
    fixed: 'right',
    width: 100,
    render: () => <button className='delete' style={{backgroundPosition:'-83px -153px'}} ></button>,
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

class ShoppingCart extends Component {
  state = {
    selectedRowKeys: [], // Check here to configure the default column
  };



  onSelectChange = selectedRowKeys => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  };

  render() {
    const {selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    return (
      <CartWarp>
        <Table rowSelection={rowSelection} columns={columns}  dataSource={data} 
        pagination={{ defaultPageSize:4 }}
        />
        <div className='dealWith'>
          <span style={{cursor:'pointer'}}>
            删除选中的商品
          </span>
          <span>
            共{data.length}件商品，已选择{selectedRowKeys.length}件
          </span>
          <span>
            共599元
          </span>
          <button>
            去结算
          </button>
        </div>

      </CartWarp>
    );
  }
}

export default ShoppingCart