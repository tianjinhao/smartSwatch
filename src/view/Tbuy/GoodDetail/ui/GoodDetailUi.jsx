import React, { Component } from "react";
import { GoodDetailWrap } from "./StyledGoodDetail";
import ImgZone from "./ImgZooe";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { Modal, message } from "antd";
import randomstring from 'randomstring'

@withRouter
@connect(
  (state) => {
    return {
      evaluateType: state.gooddetail.evaluateType,
    };
  },
  (dispatch) => ({
    changeGood() {
      console.log(this);
      dispatch({ type: "Good" });
    },
    changeMedium() {
      dispatch({ type: "Medium" });
    },
    changeBad() {
      dispatch({ type: "Bad" });
    },
  })
)
class GoodDetail extends Component {
  constructor(props) {
    super(props);
    this.userId = localStorage.getItem("userId")
    console.log(this);
  }
  state = {
    visible: false,
    collectBool: false,
    num: 1,
  };

  // componentDidMount() {
  //   console.log(this);
  // }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  hideModal = () => {
    this.setState({
      visible: false,
    });
  };

  changeHandler = () => {
    return (e) => {
      let value = Number(e.target.value);
      if (value < 1) {
        this.setState({
          num: 1,
        });
      } else if (value > 99) {
        this.setState({
          num: 99,
        });
      } else {
        this.setState({
          num: value,
        });
      }
    };
  };
  handleCollectCLick = async () => {
    this.setState((prevState, props) => {
      return {
        collectBool: !prevState.collectBool,
      };
    });
    message.success({
      content: !this.state.collectBool ? "收藏成功" : "取消收藏",
      className: "custom-class",
      style: {
        marginTop: "20vh",
      },
      duration: 0.5,
    });
  };

  dec = () => {
    return () => {
      if (this.state.num > 1) {
        this.setState((prevState, props) => {
          return {
            num: prevState.num - 1,
          };
        });
      }
    };
  };
  inc = () => {
    return () => {
      this.setState((prevState, props) => {
        return {
          num: prevState.num + 1,
        };
      });
    };
  };

  handleEvaluateClick = (type) => {
    return () => {
      switch (type) {
        case 0:
          this.props.changeGood();
          break;
        case 1:
          this.props.changeMedium();
          break;
        case 2:
          this.props.changeBad();
          break;
        default:
          break;
      }
      this.props.onEvaluateType(type);
    };
  };


  handleBuyClick = () => {
    if(!this.userId){
      return console.log("未登录");
    }
    let data = {
      goodDetailData: this.props.goodDetailData,
      num: this.state.num,
      price: this.state.num * this.props.goodDetailData.commodityPrice,
      out_trade_no: randomstring.generate()
    }
    this.props.history.push("/order/confirmorder", data )
  }

  render() {
    let evaluateType = this.props.evaluateType;
    let Data = this.props.goodDetailData;
    let modelData = this.props.modelData;
    return (
      <GoodDetailWrap>
        <div className="good_detail">
          <div className="good_detail_show">
            <div className="good_detail_show_left">
              <ImgZone
                width="316"
                height="434"
                img={Data.imageUrl}
                bor_rad="8"
              ></ImgZone>
              <span className="buy_collect">
                <p
                  onClick={this.handleCollectCLick}
                  className={this.state.collectBool ? "collect" : ""}
                ></p>
                <span>收藏</span>
              </span>
              <ImgZone
                width="100"
                height="137"
                img={Data.imageUrl}
                bor_rad="3"
              ></ImgZone>
            </div>
            <div className="good_detail_show_right">
              <h2 className="good_name">{Data.commodityName}</h2>
              <p className="good_info">
                {Data.describe.map((item, index) => {
                  if (index === Data.describe.length - 1) {
                    return item;
                  }
                  return item + "丨";
                })}
              </p>
              <p className="good_price">
                价格：
                <span>
                  <i>¥</i>
                  {Data.commodityPrice}
                </span>
              </p>
              <div className="good_options">
                <div className="good_options_item good_carriage">
                  <span className="option_name">运&emsp;&emsp;费</span>
                  <span className="pinkage">包邮</span>
                  <span className="store">库存{Data.commodityInventory}件</span>
                </div>
                <div className="good_options_item good_support">
                  <span className="option_name">支&emsp;&emsp;持</span>
                  <div>
                    <span>
                      <i></i>花呗分期
                    </span>
                    <span>
                      <i></i>百城速达
                    </span>
                    <span>
                      <i></i>顺丰发货
                    </span>
                    <span>
                      <i></i>7天无理由退货
                    </span>
                  </div>
                </div>
                {/* <hr style="color: blue;border-style:dotted;width:490"/> */}
                <div className="bar">
                  <hr />
                </div>
                <div className="good_options_item good_version">
                  <span className="option_name">型&emsp;&emsp;号</span>
                  <ul>
                    {modelData.slice(0, 6).map((item) => {
                      return (
                        <li key={item.commodityId}>{item.commodityName}</li>
                      );
                    })}
                  </ul>
                </div>
                <div className="good_options_item good_num">
                  <span className="option_name">数&emsp;&emsp;量</span>
                  <div>
                    <span onClick={this.dec()}>-</span>
                    <input
                      type="text"
                      value={this.state.num}
                      readOnly
                      style={{ userSelect: "none" }}
                    />
                    <span onClick={this.inc()}>+</span>
                  </div>
                </div>
              </div>
              <div className="good_btn">
                <div onClick={this.handleBuyClick}>立即购买</div>
                <div onClick={this.showModal}>加入购物车</div>
              </div>
            </div>
          </div>
          <Modal
            visible={this.state.visible}
            onOk={this.hideModal}
            onCancel={this.hideModal}
            mask={false}
            centered
            closable={false}
            footer={null}
            bodyStyle={{
              width: "520px",
              height: "204px",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "50px 0",
            }}
          >
            <p style={{ fontSize: "20px", color: "#676767" }}>
              已成功加入购物车
            </p>
            <p style={{ fontSize: "16px", color: "#9B9B9B" }}>
              登录后可显示您账号中已加入的商品哦~
            </p>
            <Link
              to="/shoppingcart"
              style={{ fontSize: "16px", color: "#4FBAFA" }}
            >
              去登录 {">"}{" "}
            </Link>
          </Modal>
          {/* 用户评价 */}
          <div className="good_detail_evaluate">
            <div className="user">
              <h3>用户评价</h3>
              <p>
                <span>好评度</span>
                <span>{this.props.evaluateData.favorable}</span>
              </p>
            </div>
            <div className="all">
              <h3>
                <span>全部评价（{this.props.evaluateData.evaluateCount}）</span>
                <span onClick={this.handleEvaluateClick(0)}>
                  <i
                    className={
                      "good" + (evaluateType === "good" ? " active" : "")
                    }
                  ></i>
                  好评（{this.props.evaluateData.goodEvaluateNum}）
                </span>
                <span onClick={this.handleEvaluateClick(1)}>
                  <i
                    className={
                      "medium" + (evaluateType === "medium" ? " active" : "")
                    }
                  ></i>
                  中评（{this.props.evaluateData.meddleEvaluateNum}）
                </span>
                <span onClick={this.handleEvaluateClick(2)}>
                  <i
                    className={
                      "bad" + (evaluateType === "bad" ? " active" : "")
                    }
                  ></i>
                  差评（{this.props.evaluateData.badEvaluateNum}）
                </span>
              </h3>
              <ul>
                {this.props.evaluateAllData.map((item, index) => {
                  return (
                    <li key={index}>
                      <div className="user_info">
                        <img src="" alt="" />
                        <span>{item.user.nickname}</span>
                      </div>
                      <div className="evaluate_info">
                        <p className="level">
                          <span>
                            <i
                              className={
                                "good" +
                                (item.evaluateType === 0 ? " active" : "")
                              }
                            ></i>
                            好评
                          </span>
                          <span>
                            <i
                              className={
                                "medium" +
                                (item.evaluateType === 1 ? " active" : "")
                              }
                            ></i>
                            中评
                          </span>
                          <span>
                            <i
                              className={
                                "bad" +
                                (item.evaluateType === 2 ? " active" : "")
                              }
                            ></i>
                            差评
                          </span>
                        </p>
                        <p className="evaluate_info_item">
                          {item.evaluateDetails}
                        </p>
                        <p className="evaluate_time">
                          <span className="good_type">
                            {Data.commodityName}
                          </span>
                          <span className="time">{item.evaluateTime}</span>
                        </p>
                      </div>
                    </li>
                  );
                })}
                {!this.props.evaluateAllData.length ? (
                  <li className="null">没有此类评价</li>
                ) : (
                  ""
                )}
              </ul>
            </div>
          </div>
        </div>
      </GoodDetailWrap>
    );
  }
}

export default GoodDetail;
