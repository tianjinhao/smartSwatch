import React,{useState,useEffect}from 'react';

import {List} from './listStyle'
import ListNull from './ListNull'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
// import http from '@u/http'
import axios from 'axios'

function ShopList(props) {
  const [list,setList] = useState({})
  const state  = useSelector(state => state.classify)

  useEffect(() => {
    async function loadData() {
      let newState = JSON.stringify(state)
      // console.log(newState);
      let result = await axios({
        method:'post',
        url:'http://10.9.27.159:8080/commodity/getSpeedDialImage',
        data:newState,
        headers:{
          'Content-Type':'application/json'
        }
      })
      setList(result.data)
      // console.log(result);
    }
    loadData()
  },[state])
  props.getData(list.total)

  // console.log(list.data);
  return (
    <List>
      <ul>
        {
         list.data && list.data.length>0 ? 
              list.data.map((v)=>{
                return (
                  <li key={v.commodityId}>
                    <Link to={{pathname:`/detailcon?id=${v.commodityId}&name=${v.commodityName}`}}>
                      <div className="v-contain">
                        <div className="img-con">
                          <img src={v.imageUrl} alt=""/>
                        </div>
                      <h1>{v.commodityName}</h1>
                      <div className="describe">
                        <h2>{v.describe[0]}</h2>&nbsp;|&nbsp;
                        <h2>{v.describe[1]}</h2>
                      </div>
                      <h3>￥ {v.commodityPrice} 元</h3>
                      </div>
                    </Link>
                    <Link to='/gooddetail'><p></p></Link>
                  </li>
                )
              }) : <ListNull></ListNull>
        }
      </ul>
    </List>
  );
}

export default ShopList;