import React, { useCallback, useEffect, useState } from 'react';
import { OrderWarp } from './styledCart'
import { useSelector, useDispatch } from 'react-redux'
import { orderAsync, delOrder, celOrder, confirm} from '../actionCreator'


import 'antd/dist/antd.css'
import { Modal, Radio, Input } from 'antd';


function CartBodyOrder(props) {
  const dispatch = useDispatch()
  const [show, setShow] = useState(false)
  const [show1, setShow1] = useState(false)
  const [show2, setShow2] = useState(false)
  const [value, setvalue] = useState(1)
  const [userid,setUserId] = useState()
  const [indexId, setIndexId] = useState()
  const onchange = (e) => {
    console.log(e.target);
    setvalue(e.target.value)
  }

  const pagechang = (v) => {
    props.history.push({ pathname: '/shoppingcart/order/common', state: v })
  }
  const lodata = useCallback(() => {
    dispatch(orderAsync())
  }, [dispatch])
  useEffect(() => {
    lodata()
  }, [lodata])
  const data = useSelector(state => state.shoppingCart.orderList.data)

  const celorder = useCallback((a,b)=>{
    console.log(a);
    console.log(b);
    setUserId(a)
    setIndexId(b)
    setShow(true)
  },[])

  const delorder = useCallback((a, b) => {
    setUserId(a)
    setIndexId(b)
    setShow1(true)
  },[])

  const confirmOrder = useCallback((a, b) => {
    setUserId(a)
    setIndexId(b)
    setShow2(true)
  },[])

  const celdetail = useCallback((a,b)=>{
    console.log(a);
    console.log(b);
    dispatch(celOrder(a,b))
    setShow(false)

  },[dispatch])
  const deldetail = useCallback((a,b)=>{
    console.log(a);
    console.log(b);
    dispatch(delOrder(a,b))
    setShow1(false)

  },[dispatch])

  const cfmdetail = useCallback((a,b)=>{
    console.log(a);
    console.log(b);
    dispatch(confirm(a,b))
    setShow2(false)

  },[dispatch])
  return (
    <OrderWarp>
      <div className="orderHeader">
        <span>全部订单</span>
        <div></div>
        <span>待付款</span>
        <div></div>
        <span>待发货</span>
        <div></div>
        <span>已发货</span>
        <div></div>
        <span>待评价</span>
      </div>
      <div className="orderBody">
        <div className='orderTitle'>
          <span>我的物流</span>
          <span>订单明细</span>
          <span>金额</span>
          <span>状态</span>
        </div>
        <ul>
          {
            data && data.map((v) => (
              <li className='order' key={v.indentId} >
                {
                  v.itemVoList && v.itemVoList.map((c) =>
                    (                       
                        ((() => {
                          switch (v.indentStatus) {
                            case 0:
                              return (
                                <div className='orderItems' key={c.commodityId}>
                                  <div className='orderInfo'>
                                    <img src={v.imageUrl} alt="" />
                                    <div className='itemInfo'>
                                      <p className='itemName'>{c.commodityName}</p>
                                      <p className='itemTitle'>{c.describes[0]} {c.describes[1]}</p>
                                    </div>
                                  </div>
                                  <div className='itemDetail'>
                                    <p className='itemAdr'>{v.addressId}</p>
                                    <p className='itemUser'>签收人：{v.consigneeName}</p>
                                    <p className='itemId'>订单编号:{v.indentNumber}</p>
                                    <p className='itemDate'>{v.indentCreateTime}</p>
                                  </div>
                                  <div className='itemPrice'>
                                    <p>￥{c.commodityPrice}</p>
                                    <span>×{c.commodityNum}</span>
                                  </div>
                                  <div className="orderState">
                                    <p className="cancelOrder" onClick={() => celorder(v.userId, v.indentId)}>取消订单</p>
                                    <p className="payment">付款</p>
                                  </div>
                                </div>
                              )
                            case 1:
                              return (
                                <div className='orderItems' key={c.commodityId}>
                                  <div className='orderInfo'>
                                    <img src={v.imageUrl} alt="" />
                                    <div className='itemInfo'>
                                      <p className='itemName'>{c.commodityName}</p>
                                      <p className='itemTitle'>{c.describes[0]} {c.describes[1]}</p>
                                    </div>
                                  </div>
                                  <div className='itemDetail'>
                                    <p className='itemAdr'>{v.addressId}</p>
                                    <p className='itemUser'>签收人：{v.consigneeName}</p>
                                    <p className='itemId'>订单编号:{v.indentNumber}</p>
                                    <p className='itemDate'>{v.indentCreateTime}</p>
                                  </div>
                                  <div className='itemPrice'>
                                    <p>￥{c.commodityPrice}</p>
                                    <span>×{c.commodityNum}</span>
                                  </div>
                                  <div className="orderState">
                                    <p className="ordertip">买家已付款</p>
                                  </div>
                                </div>
                              )

                            case 2:
                              return (
                                <div className='orderItems' key={c.commodityId}>
                                  <div className='orderInfo'>
                                    <img src={v.imageUrl} alt="" />
                                    <div className='itemInfo'>
                                      <p className='itemName'>{c.commodityName}</p>
                                      <p className='itemTitle'>{c.describes[0]} {c.describes[1]}</p>
                                    </div>
                                  </div>
                                  <div className='itemDetail'>
                                    <p className='itemAdr'>{v.addressId}</p>
                                    <p className='itemUser'>签收人：{v.consigneeName}</p>
                                    <p className='itemId'>订单编号:{v.indentNumber}</p>
                                    <p className='itemDate'>{v.indentCreateTime}</p>
                                  </div>
                                  <div className='itemPrice'>
                                    <p>￥{c.commodityPrice}</p>
                                    <span>×{c.commodityNum}</span>
                                  </div>
                                  <div className="orderState">
                                    <button className="paid" onClick={() => confirmOrder(v.userId, v.indentId)}>确认收货</button>
                                  </div>
                                </div>
                              )
                            case 3:
                              return (
                                <div className='orderItems' key={c.commodityId}>
                                  <div className='orderInfo'>
                                    <img src={v.imageUrl} alt="" />
                                    <div className='itemInfo'>
                                      <p className='itemName'>{c.commodityName}</p>
                                      <p className='itemTitle'>{c.describes[0]} {c.describes[1]}</p>
                                    </div>
                                  </div>
                                  <div className='itemDetail'>
                                    <p className='itemAdr'>{v.addressId}</p>
                                    <p className='itemUser'>签收人：{v.consigneeName}</p>
                                    <p className='itemId'>订单编号:{v.indentNumber}</p>
                                    <p className='itemDate'>{v.indentCreateTime}</p>
                                  </div>
                                  <div className='itemPrice'>
                                    <p>￥{c.commodityPrice}</p>
                                    <span>×{c.commodityNum}</span>
                                  </div>
                                  <div className="orderState">
                                    <p className="cancelOrder" onClick={() => delorder(v.userId, v.indentId)}>删除订单</p>
                                    <p className="payment" onClick={() => pagechang({ c })}>评价</p>
                                  </div>
                                </div>
                              )
                            default:
                              return null;
                          }

                        })())
                  ))
                }
              </li>
            ))
          }
          <Modal
            title="请选择订单取消的原因"
            visible={show}
            cancelText="取消"
            okText="确定"
            onOk={() => celdetail(userid,indexId)}
            onCancel={() => setShow(false)}
          >
            <Radio.Group onChange={onchange} value={value} >
              <Radio style={{ display: 'block', height: '30px', lineHeight: '30px', }} value={1}>
                拍错了/多拍了
              </Radio>
              <Radio style={{ display: 'block', height: '30px', lineHeight: '30px', }} value={2}>
                收货信息填写错误
              </Radio>
              <Radio style={{ display: 'block', height: '30px', lineHeight: '30px', }} value={3}>
                提示库存不足，无法支付
              </Radio>
              <Radio style={{ display: 'block', height: '30px', lineHeight: '30px', }} value={4}>
                忘记使用优惠券
              </Radio>
              <Radio style={{ display: 'block', height: '30px', lineHeight: '30px', }} value={5}>
                去其他渠道购买
              </Radio>
              <Radio style={{ display: 'block', height: '30px', lineHeight: '30px', }} value={6}>
                我不想买了
              </Radio>
              <Radio style={{ display: 'block', height: '30px', lineHeight: '30px', }} value={7}>
                其他原因
                {value === 7 ? <Input style={{ width: 100, marginLeft: 10 }} /> : null}
              </Radio>
            </Radio.Group>
          </Modal>
          <Modal
          title="是否确认取消订单"
          visible={show1}
          onOk={() => deldetail(userid,indexId)}
          onCancel={() => setShow1(false)}
          cancelText="取消"
          okText="确定"
          >
          确定删除订单吗
          </Modal>
          <Modal
          title="是否确认收货"
          visible={show2}
          onOk={() => cfmdetail(userid,indexId)}
          onCancel={() => setShow2(false)}
          cancelText="取消"
          okText="确定"
          >
          确定收货吗
          </Modal>
        </ul>

      </div>
    </OrderWarp>

  );
}

export default CartBodyOrder;