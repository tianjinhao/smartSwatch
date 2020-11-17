import React from 'react';
import { CartWarp } from './styledCart';
import 'antd/dist/antd.css';
import { Table} from 'antd';
import {useSelector,useDispatch} from 'react-redux'
import {useState} from 'react'
import {
  increament,
  decreament,
  deleteAsync
} from '../actionCreator'




function CartBodyShopping1231(props) {
  const data =  useSelector(state=>state.shoppingCart.list)
  const num = useSelector(state=>state.shoppingCart.num)
  const dispatch = useDispatch()
  const [arr,setArr] = useState([])
  const onSelectChange =(i,x)  => {
    setArr([
      ...x
    ],[x])
  };
  const rowSelection = {
    onChange: onSelectChange,
  };
  const columns = [
    {
      title: '全选',
      dataIndex: 'imageUrl',
      render: (imageUrl) =>
          <><img src={imageUrl} alt="" /></>
    },
    {
      
      dataIndex:'commodityName',
      render: (commodityName) =>
          <div className='description'>
            <span className='productName'>{commodityName}</span>
          </div>
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
            <button style={{ backgroundPosition: '-78px -82px' }} onClick={()=>dispatch(decreament(num))} ></button>
            <div style={{width:'20px',textAlign:'center',lineHeight:'18px'}}>{num}</div>
            <button style={{ backgroundPosition: '-78px -115px' }} onClick={()=>dispatch(increament(num))} ></button>
          </div>
        </>
    },
    {
      title: '小件（元）',
      dataIndex: 'commodityCount',
      render: (commodityCount) =>
        <div className='total'><div></div><p>{commodityCount}</p></div>
    },
    {
      title: '完成',
      key: 'operation',
      fixed: 'right',
      width: 100,
      render: () => <button className='delete' onClick={()=>dispatch(deleteAsync())} style={{ backgroundPosition: '-83px -153px' }} ></button>,
    },
  ];

  return (
    <CartWarp>
      <Table rowKey='id' rowSelection={rowSelection} columns={columns} dataSource={data}
        pagination={{ defaultPageSize: 4,}}
      />
      <div className='dealWith'>
        <span style={{ cursor: 'pointer' }}>
          删除选中的商品
        </span>
        <span>
          共{data.length}件商品，已选择{arr.length}件
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

export default CartBodyShopping1231;