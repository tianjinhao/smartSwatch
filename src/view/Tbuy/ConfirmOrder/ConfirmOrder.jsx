import React, { Component } from "react";
import { Modal, Button } from "antd";
import order_img from "@a/images/home/hot/手环/热卖-手环-4.png";
import { ConfirmOrderWrap } from "../StyledTbuy";
import { Link } from 'react-router-dom'

class ConfirmOrder extends Component {
  state = {
    ModalText: "Content of the modal",
    visible: false,
    confirmLoading: false,
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  handleOk = () => {
    this.setState({
      ModalText: "The modal will be closed after two seconds",
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 2000);
  };

  handleCancel = () => {
    console.log("Clicked cancel button");
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <ConfirmOrderWrap>
        <div className="consignee">
          <h2 className="confirm_order_title">收件人信息</h2>
          <ul>
            <li className="site_info active">
              <div className="basic_info">
                <span>九九</span>
                <span>17835697870</span>
              </div>
              <p className="address">
                辽宁省大连市旅顺口区旅顺经济开发 区216号大连交通大学二期
              </p>
              <span className="select"></span>
            </li>

            <li className="add_site">
              <Button type="primary" onClick={this.showModal}>
                <i className="add"></i>
                <span>添加新地址</span>
              </Button>
            </li>
            <Modal
              title="添加新地址"
              visible={this.state.visible}
              onOk={this.handleOk}
              confirmLoading={this.state.confirmLoading}
              onCancel={this.handleCancel}
              cancelText="放弃"
              okText="确认"
            >
              <p>{this.state.ModalText}</p>
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
                    <p>赤道金腕带</p>
                    <p>羚羊跑鞋运动鞋搭配智能芯片 拷贝</p>
                  </div>
                </td>
                <td>
                  <i>¥</i>
                  <span className="price">799.00</span>
                </td>
                <td>
                  <span className="num">1</span>
                </td>
                <td>
                  <i>¥</i>
                  <span className="subtotal">799.00</span>
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
                      <i>¥</i> 799.00
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
                <div className="radio_box">
                  <div className="item_radio"></div>
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
                <div className="radio_box">
                  <div className="item_radio"></div>
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
                <div className="radio_box">
                  <div className="item_radio"></div>
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
                <i>¥</i>799.00
              </span>
            </p>
          </div>
          <Link to="/home/order/completeorder"><div className="order_btn">下单并支付</div></Link>
        </div>
      </ConfirmOrderWrap>
    );
  }
}

export default ConfirmOrder;
