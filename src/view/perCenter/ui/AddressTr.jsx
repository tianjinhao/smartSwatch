import React, { useState,useEffect} from "react";
import http from '@u/http'
import { Modal } from "antd";
import AddressForm from './AddressForm'

import { useSelector } from 'react-redux'
import { AddressTrWrap } from "./StyledPerCenter";
function AddressTr(props) {
  const [visible, setVisible] = useState(false);
  const [formVisible, setFormVisible] = useState(false);
  const [seting] = useState(false);
  const [address,setAddress] = useState({})
  const state = useSelector(state =>state.address)
  const [addressId]=useState()
  useEffect(()=>{
    async function loadAddress(){
      let result = await http.post('/address/getAddress',JSON.stringify(state))
      setAddress(result)
    }
    loadAddress()
  },[state])
  props.getTotal(address.total)

  const showModal = () => {
    setVisible(true);
  };
  const showFormModal = () => {
    setFormVisible(true);
    // console.log(id);)
  };

  const handleOk = (id) => {
    setVisible(false); 
    async function deleteAddress(){
      let res = await http.post('/address/delAddress',JSON.stringify({
        userId:localStorage.getItem('userId'),
        addressId:id
      }))
      console.log(res);
    }
    deleteAddress()
    window.location.reload()
  };

  const handleCancel = () => {
    setVisible(false);
  };
  const handleFormCancel = () => {
    setFormVisible(false);
    localStorage.removeItem('addressId')
  };
  const handleSetClick = (id) => {
    showFormModal()
    localStorage.setItem('addressId',id)
  }
  props.handleGetAddressId(addressId)
  return (
    <tbody>
      {
        address.data && address.data.map((v,i)=>{
          return (
            <AddressTrWrap className={seting ? "show" : ""} key={i}>
              <td>{v.consigneeName}</td>
              <td>{v.provinceName}{v.cityName}{v.countryName}{v.addressDetail}</td>
              <td>{v.consigneeTel}</td>
              <td className="oper">
                <div className="amend">
                  <div className="am_btn">
                    <div className="default" onClick={handleSetClick}>设为默认</div>
                  </div>
                  <span onClick={()=>handleSetClick(v.addressId)}>修改</span>
                </div>
                <div className="del">
                  <span onClick={showModal}>删除</span>
                  <Modal
                    visible={visible}
                    width="425px"
                    centered
                    bodyStyle={{
                      width: "425px",
                      height: "250px",
                      textAlign: "center",
                      lineHeight: "250px",
                      color: "#2F2F2F",
                      fontSize: "18px",
                    }}
                    onOk={()=>handleOk(v.addressId)}
                    onCancel={handleCancel}
                    cancelText="取消"
                    okText="确定"
                  >
                    确定要删除数据？
                  </Modal>


                  <Modal
                    title="修改新地址"
                    width="900px"
                    visible={formVisible}
                    centered
                    onCancel={handleFormCancel}
                    footer={null}
                  >
                    <AddressForm></AddressForm>
                  </Modal>




                </div>
              </td>
            </AddressTrWrap>
          )
        })
      }

    </tbody>
  );
}

export default AddressTr;
