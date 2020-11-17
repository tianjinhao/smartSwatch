import React,{useState,useCallback, useEffect} from 'react';
import { Input, Pagination } from 'antd';
import 'antd/dist/antd.css';
import {FavoritesWarp} from './styledCart'
import {favAsync,cateAsync} from '../actionCreator'
import {useSelector,useDispatch} from 'react-redux'



const {Search} = Input
function CartBodyFavorites(props) {
  const dispatch = useDispatch()
  const lodata = useCallback(()=>{
    dispatch(favAsync())
  },[dispatch])
  const catedata = useCallback(()=>{
    dispatch(cateAsync())
  },[dispatch])
  useEffect(()=>{
    lodata()
    catedata()
  },[lodata,catedata])


  const favlist = useSelector(state=>state.shoppingCart.favList.data)
  const catelist = useSelector(state=>state.shoppingCart.cate.data)
  const total = useSelector((state=>state.shoppingCart.favList.total))
  console.log(favlist);
  console.log(catelist);
  const [show,setShow] = useState(true)
  const [liShow,setLiShow] = useState(true)

  const handler =useCallback(() =>{
    console.log('12312312')
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
        <div className="favB-header" >
          <span>全部商品({total})</span>
          {
            catelist && catelist.map((v)=>(
              <span key={v.productId}>{v.productName}({v.productNum})</span>
            ))
          }

        </div>
        <ul className='fav-list'>
          {
            favlist && favlist.map((v)=>(
              <li 
              className={!liShow?'list-items lis-items-checked': 'list-items'} 
              onClick={()=>setLiShow(!liShow)}
              key={v.commodityId}
              >
                <div className='li-chBox1' style={{display:(liShow?'none':'')}}></div>
                <div className='li-chBox2'></div>
                <div className='favimg'><img src={v.imageUrl} alt=""/></div>
                <span className='fav-name'>{v.commodityName}</span>
                <span className='fav-price'>
                  <span>￥</span>{v.commodityPrice}
                </span>
              </li>
            ))
          }
          
        </ul>
        <Pagination defaultCurrent={1} total={total} pageSizeOptions={10} onChange={()=>dispatch(lodata())}/>
      </div>
    </FavoritesWarp>
  );
}

export default CartBodyFavorites;