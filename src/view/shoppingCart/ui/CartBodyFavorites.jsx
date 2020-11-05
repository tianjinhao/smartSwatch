import React,{useState,useCallback} from 'react';
import { Input, Pagination } from 'antd';
import 'antd/dist/antd.css';
import {FavoritesWarp} from './styledCart'


import testimg from '@a/images/3_03.jpg'

const {Search} = Input
function CartBodyFavorites(props) {
  const [show,setShow] = useState(true)
  const [liShow,setLiShow] = useState(true)

  const handler =useCallback(() =>{
    console.log('12312312')
  },[])
  const listChange = useCallback((x,y) => {
    console.log(x)
  },[])

  return (
    <FavoritesWarp>
      <div className='favoritesHeader'>
        <div className='favoritesHleft'>
          <span>全部宝贝</span>
        </div>
        <div className='favoritesHright'>
          <button className='fav-btn' style={{display:(show?'':'none')}} onClick={()=>setShow(!show)}>批量管理</button>
          <div style={{display:(show?'none':'')}}  className='fav-operating'>
            <div className='fav-box' style={{marginRight:'-20px'}} onClick={()=>setLiShow(!liShow)}>
              <div className='fav-icon1'  style={{backgroundPosition:(liShow?'-79px -57px':'-115px -58px')}}></div>
             <span>全选</span>
            </div>
            <div className='fav-box'style={{marginRight:'-50px'}}>
              <div className='fav-icon' style={{backgroundPosition:'-55px -21px'}}></div>
              <span>加入购物车</span>
            </div>
            <div className='fav-box'style={{marginRight:'-50px'}}>
              <div className='fav-icon' style={{backgroundPosition:'-84px -20px'}}></div>
              <span>
                取消购物车
              </span>
            </div>
            <button className='fav-btn' onClick={()=>setShow(!show)}>完成</button>
          </div>
          <Search
            placeholder="宝贝搜索"
            allowClear
            size='small'
            style={{ width: 125}}
            onChange={handler}
            onSearch={handler}
          />
        </div>
      </div>
      <div className='fav-body'>
        <div className="favB-header">
          <span>全部商品(50)</span>
          <span>手表(10)</span>
          <span>手环(10)</span>
          <span>运动周边(10)</span>
          <span>配件(10)</span>
        </div>
        <ul className='fav-list'>
          <li className={!liShow?'list-items lis-items-checked': 'list-items'} onClick={()=>setLiShow(!liShow)}>
            <div className='li-chBox1' style={{display:(liShow?'none':'')}}></div>
            <div className='li-chBox2'></div>
            <img src={testimg} alt=""/>
            <span className='fav-name'>智能手表</span>
            <span className='fav-price'>
              <span>￥</span>1099
            </span>
          </li>
        </ul>
        <Pagination defaultCurrent={1} total={50} pageSizeOptions={10} onChange={listChange}/>
      </div>
    </FavoritesWarp>
  );
}

export default CartBodyFavorites;