import { Table } from 'antd';
import React, { Component } from 'react';
import { CartWarp } from './styledCart'
import 'antd/dist/antd.css';


class ShoppingCart extends Component {

    columns = [
      {
        title: '全选',
        dataIndex: 'info',
        render: (info) =>
          <>
            <div className='tabicon'></div>
            <img src={info.imageUrl} alt="" />
            <div className='description'>
              <span className='productName'>{info.commodityName}</span>
              <span className='producttitle'>{info.describe[0]}|{info.describe[1]}</span>
            </div>
          </>
      },
      {
        title: '单价（元）',
        dataIndex: 'commodityPrice',
        render: (commodityPrice) => <span className='price'>{commodityPrice}</span>
      },
      {
        title: '数量',
        dataIndex: 'commodityNum',
        render: (commodityNum) =>
          <>
            <div className='productPrice'>
              <button style={{ backgroundPosition: '-78px -82px' }} onClick={(e) => this.handlerclick(e)}></button>
              <input type="text" defaultValue='1' onChange={this.handlerclick()}/>
              <button style={{ backgroundPosition: '-78px -115px' }}></button>
            </div>
          </>
      },
      {
        title: '小件（元）',
        dataIndex: 'total',
        render: () =>
          <div className='total'><div></div><p>599</p></div>
      },
      {
        title: '完成',
        key: 'operation',
        fixed: 'right',
        width: 100,
        render: () => <button className='delete' style={{ backgroundPosition: '-83px -153px' }} ></button>,
      },
    ];

    handlerclick = (v) => {
    }
    state = {
      data: [],
      selectedRowKeys: [], // Check here to configure the default column
    };
  

  onSelectChange = selectedRowKeys => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  };

  render() {
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    return (
      <CartWarp>
        <Table rowSelection={rowSelection} columns={this.columns} dataSource={this.props.list}
          pagination={{ defaultPageSize: 4,onChange:this.handlerclick}}
        />
        <div className='dealWith'>
          <span style={{ cursor: 'pointer' }}>
            删除选中的商品
          </span>
          <span>
            共{this.state.data.length}件商品，已选择{selectedRowKeys.length}件
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