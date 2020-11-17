import {ShoppingWarp, List} from './styledCart'
import {useSelector,useDispatch} from 'react-redux'
import React, {useEffect, useState,useCallback}from 'react';
import { Pagination } from 'antd';
import {increament,decreament,changenum,deleteAsync,loadDataAsync} from '../actionCreator'

function CartBodyShoppingCar(props) {
  // const [checkList,setCheckList] = useState([])

  const data =  useSelector(state=>state.shoppingCart.list)
  const dispatch = useDispatch()
  const total = useSelector(state=>state.shoppingCart.total)
  const [arr,arrState] = useState([])
  const id = localStorage.getItem("userId")
  const [page, setPage] = useState(1)
  const lodata = useCallback((x,y,z)=>{
    dispatch(loadDataAsync(x,y,z))
  },[dispatch])
  const changepage = (a,b)=>{
    console.log(a);
    console.log(b);
    setPage(a)
    dispatch(loadDataAsync(id,b,a))
  }
  const onchange = (e,v) =>{
    let _arr =[]
    if(e.target.checked){
      _arr.push(v)
    }else{
      _arr=_arr.filter((item=>{
        return item!==v
      }))
    }
    arrState([
      ..._arr
    ])
  }
  
  const oncheck=(e)=>{
    if(e.target.checked){
      arrState([
        ...data
      ])
    }else{
      arrState([
      ])
    }
  }

  useEffect(()=>{
    lodata(id,4,1)
  },[lodata, id])
  return (
    <ShoppingWarp> 
      <div className='tabTitle'>
        <input type='checkbox' className="tabicon" 
        onChange={(e)=>{oncheck(e)}} checked={((arr.length) === (data.length))?true:false}
        ></input>
        <span>全选</span>
        <span style={{marginLeft:'312px'}}>单价（元）</span>
        <span style={{marginLeft:'65px'}}>数量</span>
        <span style={{marginLeft:'75px'}}>小件（元）</span>
        <span style={{marginLeft:'60px'}}>完成</span>
      </div>
      <ul className='tabUl'>
        {
          data.map((v,i)=>(
            <List key={v.id}>
              <input type='checkbox' className="tabicon" 
              onChange={(e)=>{onchange(e,v)}}
              />
                <img src={v.imageUrl} alt=""/>
                <div className='description'>
                  <span className='productName'>{v.commodityName}</span>
                  <span className='producttitle'>{v.describe[0]}|{v.describe[1]}</span>
                </div>
                <span className='price'>￥{v.commodityPrice}</span>
                <div className='productPrice'>
                  <button style={{backgroundPosition:'-78px -82px',outline:'none',cursor: 'pointer'}}  onClick={()=>dispatch(decreament(v.commodityId,v.commodityId,v.commodityNum,page))}></button>
                  <input type="text" value={v.commodityNum} onChange={(e)=>dispatch(changenum(v.id,v.commodityId,e.target.value))} style={{outline:'none'}} />
                  
                  <button style={{backgroundPosition:'-78px -115px',outline:'none',cursor: 'pointer'}} onClick={()=>dispatch(increament(v.commodityId,v.commodityId,v.commodityNum,page))} ></button>
                </div>
                <div className='total'><div></div><p>{v.commodityNum*v.commodityPrice}</p></div>
                <button className='delete' style={{backgroundPosition:'-83px -153px',cursor: 'pointer'}} 
                onClick={()=>dispatch(deleteAsync(1,v.commodityId))}
                ></button>
            </List>
          ))
        }
      </ul>
      <div className='dealWith'>
        <span style={{ cursor: 'pointer' }}>
          删除选中的商品
        </span>
        <span>
            共{total}件商品，已选择{arr.length}件
        </span>
        <span>
          共599元
        </span>
        <button>
          去结算
        </button>
      </div>
      <div className='pagination'>
        <Pagination total={total} defaultPageSize={4} onChange={(a,b)=>(changepage(a,b))}></Pagination>
      </div>
      </ShoppingWarp>
  );
}

export default CartBodyShoppingCar;