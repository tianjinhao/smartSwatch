import React, { Component } from "react";
import { Modal, Button, message } from "antd";
import order_img from "@a/images/home/hot/手环/热卖-手环-4.png";
import { ConfirmOrderWrap } from "../StyledOrder";
import AddressForm from "@v/perCenter/ui/AddressForm";
import http from "@u/http";
import axios from "axios";

class ConfirmOrder extends Component {
  constructor(props) {
    super(props);
    // 结构出要购买的订单信息  与  数量
    let { goodDetailData, num, price, out_trade_no } = props.location.state;
    this.goodDetailData = goodDetailData;
    this.num = num;
    // 每件商品的小计价格
    this.subTotalPrice = price;
    //  订单号
    this.out_trade_no = out_trade_no;

    // 获取用户id
    this.userId = localStorage.getItem("userId");
    console.log(this.out_trade_no);
  }
  state = {
    visible: false,
    addressInx: 0,
    payInx: 0,
    totalPrice: 0,
    AddressData: [],
    htmlData: "",
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };

  handleClick = (index) => {
    return () => {
      this.setState({
        addressInx: index,
      });
    };
  };

  handleRadioClick = (index) => {
    return () => {
      this.setState({
        payInx: index,
      });
    };
  };

  handlePayClick = () => {
    return async () => {
      if (this.state.payInx !== 1) {
        message.error("暂不支持此类支付");
        return;
      }

      // console.log(this.goodDetailData);
      // console.log(this.state.totalPrice);
      // console.log(this.state.AddressData[this.state.addressInx]);

      const res = await axios.post("http://walter666.cn:8080/wxpay/prepay", {
        out_trade_no: this.out_trade_no,
        total_fee: 1,
        body: this.goodDetailData.commodityName,
        url: "http://localhost:3000/order/completeorder",
      });

      this.props.history.push('/order/payorder', {data : res.data})

      // message.success("等待订单成功");
    };
  };
  //  获取用户的收货地址信息
  async loadAddressData() {
    const res = await http.post("/address/getAddress", {
      userId: this.userId,
      limit: 5,
      offset: 1,
    });
    this.setState({
      AddressData: res.data,
    });
  }

  componentDidMount() {
    this.setState({
      totalPrice: this.subTotalPrice,
    });
    this.loadAddressData();
  }

  render() {
    return (
      <ConfirmOrderWrap>
        <div className="consignee">
          <h2 className="confirm_order_title">收件人信息</h2>
          <ul>
            {this.state.AddressData.map((item, index) => {
              return (
                <li
                  className={
                    (this.state.addressInx === index ? "active " : "") +
                    "site_info"
                  }
                  key={item.addressId}
                  onClick={this.handleClick(index)}
                >
                  <div className="basic_info">
                    <span>{item.consigneeName}</span>
                    <span>{item.consigneeTel}</span>
                  </div>
                  <p className="address">
                    {item.provinceName}
                    {item.cityName}
                    {item.countyName}
                    {item.addressDetail}
                  </p>
                  <span className="select"></span>
                </li>
              );
            })}

            <li className="add_site">
              <Button type="primary" onClick={this.showModal}>
                <i className="add"></i>
                <span>添加新地址</span>
              </Button>
            </li>
            <Modal
              title="添加新地址"
              width="900px"
              visible={this.state.visible}
              centered
              onCancel={this.handleCancel}
              footer={null}
            >
              <AddressForm></AddressForm>
            </Modal>
          </ul>
        </div>
        <div className="order">
          <h2 className="confirm_order_title">确认订单信息</h2>
          <table>
            <thead>
              <tr>
                <th>供应商</th>
                <th>单价</th>
                <th>数量</th>
                <th>小计</th>
                <th>配送方式</th>
              </tr>
            </thead>
            <tbody>
              <tr className="order_item">
                <td className="order_item_info">
                  <div>
                    <img src={order_img} alt="" />
                  </div>
                  <div>
                    <p>{this.goodDetailData.commodityName}</p>
                    <p>
                      {this.goodDetailData.describe.map((item, index) => {
                        return item + " ";
                      })}
                    </p>
                  </div>
                </td>
                <td>
                  <i>¥</i>
                  <span className="price">
                    {this.goodDetailData.commodityPrice}.00
                  </span>
                </td>
                <td>
                  <span className="num">{this.num}</span>
                </td>
                <td>
                  <i>¥</i>
                  <span className="subtotal">{this.subTotalPrice}.00</span>
                </td>
                <td>
                  <span className="delivery">包邮</span>
                </td>
              </tr>
            </tbody>

            <tfoot>
              <tr>
                <td colSpan="5">
                  <p>
                    合计:{" "}
                    <span>
                      <i>¥</i> {this.state.totalPrice}.00
                    </span>{" "}
                  </p>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div className="payment">
          <h2 className="confirm_order_title">选择支付方式</h2>
          <div className="pay_list">
            <div className="pay_item alipay">
              <h3>支付宝</h3>
              <div className="choose">
                <div className="radio_box" onClick={this.handleRadioClick(0)}>
                  <div
                    className={
                      "item_radio" + (this.state.payInx === 0 ? " active" : "")
                    }
                  ></div>
                  <span></span>
                </div>
                <ul>
                  <li>蚂蚁花呗</li>
                  <li>支付宝</li>
                </ul>
              </div>
            </div>
            <div className="pay_item wxpay">
              <h3>微信支付</h3>
              <div className="choose">
                <div className="radio_box" onClick={this.handleRadioClick(1)}>
                  <div
                    className={
                      "item_radio" + (this.state.payInx === 1 ? " active" : "")
                    }
                  ></div>
                  <span></span>
                </div>
                <ul>
                  <li>微信支付</li>
                </ul>
              </div>
            </div>
            <div className="pay_item bankpay">
              <h3>网上银行</h3>
              <div className="choose">
                <div className="radio_box" onClick={this.handleRadioClick(2)}>
                  <div
                    className={
                      "item_radio" + (this.state.payInx === 2 ? " active" : "")
                    }
                  ></div>
                  <span></span>
                </div>
                <ul>
                  <li>中国银行</li>
                  <li>中国建设银行</li>
                  <li>中国农业银行</li>
                  <li>中国工商银行</li>
                  <li>交通银行</li>
                  <li>招商银行</li>
                  <li>中国邮政储蓄银行</li>
                  <li>兴业银行</li>
                  <li>上海银行</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="place_order">
          <div>
            <p>
              应付：
              <span>
                <i>¥</i>
                {this.state.totalPrice}.00
              </span>
            </p>
          </div>
          <div className="order_btn" onClick={this.handlePayClick()}>
            下单并支付
          </div>
        </div>
      </ConfirmOrderWrap>
    );
  }
}

export default ConfirmOrder;
