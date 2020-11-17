import React, { useEffect, useState } from 'react';
import {CommonWarp} from './styledCart'

function OrderCommon(props) {
  const [data,setData] = useState({})
  useEffect(()=>{
    setData(props.location.state.c)
  },[props.location.state])
  console.log(data);
  return (
    <CommonWarp>
      <h1 className='commontitle'>订单评价</h1>
      <div className='commonBody'>
        <div className='commonLeft'>
            <img src={data.imageUrl} alt=""/>
        </div>
        <div className='commonRight'>
          <div className='score'>
            <div className='scoregood'>
              <div></div>
              <span>好评</span>
            </div>
            <div className='scoremedium'>
              <div></div>
              <span>中评</span>
            </div>
            <div className='scorenegative'>
              <div></div>
              <span>差评</span>
            </div>
          </div>
          <div className='commonText'>
            <textarea className='comments' style={{resize:'none',overflow:"hidden"}} name="" id="" resize='none' placeholder="宝贝满足你的期待吗？说所你的使用心得，分享给想买的他们吧！"></textarea>
          </div>
          <div className='release'></div>
        </div>
      </div>
    </CommonWarp>
  );
}

export default OrderCommon;