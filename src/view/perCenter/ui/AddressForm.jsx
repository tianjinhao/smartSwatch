import React, { useEffect, useState, useCallback, useRef } from "react";
import { Form, Input, Button, Select } from "antd";
import { AddressFormWrap } from "./StyledPerCenter";

import http from "@u/http";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

function AddressForm(props) {
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState([]);
  const [county, setCounty] = useState([]);

  const name = useRef()
  const { Option } = Select;

  const regName = /^([\u4E00-\u9FA5]|\w){1,15}$/;
  const regMinute = /^([\u4E00-\u9FA5]|\w){4,50}$/;
  const regPhone = /^1[3|4|5|7|8][0-9]{9}$/;



  const handleProChange = useCallback(
    async (value) => {
      const res = await http.get("/address/getToponymy", {
        params: { addressDicId: value },
      });
      setCity(res.data);
    },
    []
  );
  const handleCityChange = useCallback(
    async (value) => {
      const res = await http.get("/address/getToponymy", {
        params: { addressDicId: value },
      });
      setCounty(res.data);
    },
    []
  );

  const validateName = ({ getFieldValue }) => ({
    validator(rule, value) {
      if (!value || regName.test(value)) {
        return Promise.resolve();
      }
      return Promise.reject("长度不超过15个字符");
    },
  });

  const validateMinute = ({ getFieldValue }) => ({
    validator(rule, value) {
      if (!value || regMinute.test(value)) {
        return Promise.resolve();
      }
      return Promise.reject("长度不少于4不超过50个字符");
    },
  });
  const validatePhone = ({ getFieldValue }) => ({
    validator(rule, value) {
      if (!value || regPhone.test(value)) {
        return Promise.resolve();
      }
      return Promise.reject("请输入正确的手机号");
    },
  });
  

  useEffect(() => {
    async function loadData(){
      // const res = await axios.get("/cities.json");
      // setCities(res.data);
      const res = await http.get("/address/getToponymy", {
        params: { addressDicId: 100000 },
      });
      setCities(res.data);
    };
    loadData();
  }, []);

  

  const handleFinish = async (e) => {
    let { minute, name, phone, address: { province, city, county } } = e.user
    let data = {
      userId:localStorage.getItem("userId"),
      addressId:localStorage.getItem('addressId'),
      consigneeName: name,
      consigneeTel: phone,
      provinceId: province,
      cityId: city,
      countyId: county,
      addressDetail: minute,
    };
    
    if(data.addressId){
      console.log(data);
      const res = await http.post('/address/updateAddress',data)
      console.log(res);
      if(res.message === 'success'){
        localStorage.removeItem('addressId')
        window.location.reload()
      }
    }else{
      const res = await http.post("address/addAddress", data)
      console.log(res);
      if(res.message === 'success'){
        window.location.reload()
      }
    }
    // console.log(e.user);
    console.log("成功");
  };

  const handleFinishFailed = () => {
    
  };
  return (
    <AddressFormWrap className="t_address_form">
      <Form
        layout="inline"
        onFinish={handleFinish}
        onFinishFailed={handleFinishFailed}
      >
        <Form.Item
          colon={false}
          name={["user", "name"]}
          label="收货人姓名"
          rules={[
            {
              required: true,
              message: "必填",
            },
            validateName,
          ]}
        >
          <Input  ref={name} placeholder="长度不超过15个字符"></Input>
        </Form.Item>
        <Form.Item
          name={["user", "phone"]}
          colon={false}
          label="收货手机号"
          rules={[
            {
              required: true,
              message: "必填",
            },
            validatePhone,
          ]}
        >
          <Input placeholder="请输入11位手机号"></Input>
        </Form.Item>
        <Form.Item
          label="收货人地址"
          rules={[{ required: true }]}
          colon={false}
          name={["user", "address"]}
        >
          <Input.Group compact>
            <Form.Item
              name={["user", "address", "province"]}
              colon={false}
              rules={[
                {
                  required: true,
                  message: "必填",
                },
              ]}
            >
              <Select placeholder="省/直辖市" onChange={handleProChange}>
                {cities.map((item) => {
                  return (
                    <Option value={item.addressDicId} key={item.addressDicId}>
                      {item.adressName}
                    </Option>
                  );
                })}
              </Select>
            </Form.Item>
            <Form.Item
              name={["user", "address", "city"]}
              colon={false}
              rules={[
                {
                  required: true,
                  message: "必填",
                },
              ]}
            >
              <Select placeholder="城市" onChange={handleCityChange}>
                {city.map((item) => {
                  return (
                    <Option value={item.addressDicId} key={item.addressDicId}>
                      {item.adressName}
                    </Option>
                  );
                })}
              </Select>
            </Form.Item>
            <Form.Item
              name={["user", "address", "county"]}
              colon={false}
              rules={[
                {
                  required: true,
                  message: "必填",
                },
              ]}
            >
              <Select placeholder="区县">
                {county.map((item) => {
                  return (
                    <Option value={item.addressDicId} key={item.addressDicId}>
                      {item.adressName}
                    </Option>
                  );
                })}
              </Select>
            </Form.Item>
          </Input.Group>
        </Form.Item>
        <Form.Item
          label="详细地址"
          name={["user", "minute"]}
          colon={false}
          rules={[
            {
              required: true,
              message: "必填",
            },
            validateMinute,
          ]}
        >
          <Input placeholder="请输入不少于4不超过50个字的详细地址，例如：路名   门牌号"></Input>
        </Form.Item>

        <Form.Item
          wrapperCol={{ ...layout.wrapperCol, offset: 8 }}
          className="t_address_submit"
        >
          <Button type="primary" htmlType="submit">
            保存
          </Button>
        </Form.Item>
      </Form>
    </AddressFormWrap>
  );
}

export default AddressForm;
