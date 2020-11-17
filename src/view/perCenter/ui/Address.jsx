import React,{useState} from "react";

import { AddressWrap } from "./StyledPerCenter";
import { useSelector,useDispatch } from 'react-redux'
import { actionCreator as ac } from '../index'
import AddressForm from './AddressForm'
import AddressTr from './AddressTr'

function Address(props) {
  const state = useSelector(state=>state.address)
  const [total,setTotal]= useState()
  const [changeAddressId,setId] = useState()
  const dispatch = useDispatch()
  const decrement = ()=>{
    if(state.offset>1)
    dispatch(ac.decreOffset(state.offset-1))
  }
  const increment =()=>{
    if(state.offset<Math.ceil(total/3))
    dispatch(ac.decreOffset(state.offset+1))
  }
  const getTotalData=(total) =>{
    setTotal(total)
  }
  const getAddressId=(id)=>{
    setId(id)
  }
  
  return (
    <AddressWrap className="t_address">
      <h2>
        <span>新增收货地址</span>
      </h2>

      <AddressForm addressId={changeAddressId}></AddressForm>

      {/* 已有地址 */}
      <div className="current_address">
        <h3>已有地址&nbsp;&nbsp;&nbsp;&nbsp;
        <p onClick={decrement}>&lt;</p>
        <p style={{color:"red"}}>{state.offset}</p>
        &nbsp;/
        <p>{Math.ceil(total/3) >0 ? Math.ceil(total/3) : 1}</p>
        <p onClick={increment}>&gt;</p>
        </h3>
        <table className="add_tab">
          <thead>
            <tr>
              <th>收货人姓名</th>
              <th>收货人地址</th>
              <th>收货人手机号</th>
              <th>操作</th>
            </tr>
            <tr></tr>
          </thead>
          <AddressTr  getTotal={getTotalData} handleGetAddressId={getAddressId}></AddressTr>        
        </table>
      </div>
    </AddressWrap>
  );
}

export default Address;
