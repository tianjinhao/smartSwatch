import React, { Component } from "react";
import { GoodDetailWrap } from "./StyledTbuy";
import good_img from "@a/images/home/hot/手表/热卖-手表-5.png";

import ImgZone from "./ImgZooe";

import { Link } from 'react-router-dom'

class GoodDetail extends Component {

  changeHandler(){

  }

  render() {
    return (
      <GoodDetailWrap>
        <div className="good_detail">
          <div className="good_detail_show">
            <div className="good_detail_show_left">
              <ImgZone
                width="316"
                height="434"
                img={good_img}
                bor_rad="8"
              ></ImgZone>
              <span className="buy_collect">
                <p></p>
                <span>收藏</span>
              </span>
              <ImgZone
                width="100"
                height="100"
                img={good_img}
                bor_rad="3"
              ></ImgZone>
            </div>
            <div className="good_detail_show_right">
              <h2 className="good_name">智能运动手表2</h2>
              <p className="good_info">蓝牙听歌 | 索尼28纳米GPS</p>
              <p className="good_price">
                价格：
                <span>
                  <i>¥</i>779.00
                </span>
              </p>
              <div className="good_options">
                <div className="good_options_item good_carriage">
                  <span className="option_name">运&emsp;&emsp;费</span>
                  <span className="pinkage">包邮</span>
                  <span className="store">库存100件</span>
                </div>
                <div className="good_options_item good_support">
                  <span className="option_name">支&emsp;&emsp;持</span>
                  <div>
                    <span>
                      <i></i>花呗分期
                    </span>
                    <span>
                      <i></i>花呗分期
                    </span>
                    <span>
                      <i></i>花呗分期
                    </span>
                    <span>
                      <i></i>花呗分期
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
                    <li>智能手表</li>
                    <li>智能手表</li>
                    <li>智能运动手表2</li>
                    <li>智能手表</li>
                    <li>米动手表青春版</li>
                    <li>多功能GPS手表</li>
                  </ul>
                </div>
                <div className="good_options_item good_num">
                  <span className="option_name">数&emsp;&emsp;量</span>
                  <div>
                    <span>-</span>
                    <input type="text" value="1" onChange={this.changeHandler}/>
                    <span>+</span>
                  </div>
                </div>
              </div>
              <div className="good_btn">
                <Link to="/order"><div>立即购买</div></Link>
                <div>加入购物车</div>
              </div>
            </div>
          </div>
          
          {/* 用户评价 */}
          <div className="good_detail_evaluate">
            <div className="user">
              <h3>用户评价</h3>
              <p>
                <span>好评度</span>
                <span>91%</span>
              </p>
            </div>
            <div className="all">
              <h3>
                <span>全部评价（50+）</span>
                <span><i className="good"></i>好评（50+）</span>
                <span><i className="medium"></i>中评（0）</span>
                <span><i className="bad"></i>差评（0）</span>
              </h3>
              <ul>
                <li>
                  <div className="user_info">
                    <img src="" alt=""/>
                    <span>你好</span>
                  </div>
                  <div className="evaluate_info">
                    <p className="level">
                      <span><i className=""></i>好评</span>
                      <span><i className=""></i>中评</span>
                      <span><i className=""></i>差评</span>
                    </p>
                    <p className="evaluate_info_item">哎呦，不错哦，物美价廉 ，值外观简洁轻便，推荐给身边的朋友了。</p>
                    <p className="evaluate_time">
                      <span className="good_type">智能运动手表2</span>
                      <span className="time">2019.01.03 13：21</span>
                    </p>
                  </div>
                </li>
                <li>
                  <div className="user_info">
                    <img src="" alt=""/>
                    <span>你好</span>
                  </div>
                  <div className="evaluate_info">
                    <p className="level">
                      <span><i className=""></i>好评</span>
                      <span><i className=""></i>中评</span>
                      <span><i className=""></i>差评</span>
                    </p>
                    <p className="evaluate_info_item">哎呦，不错哦，物美价廉 ，值外观简洁轻便，推荐给身边的朋友了。</p>
                    <p className="evaluate_time">
                      <span className="good_type">智能运动手表2</span>
                      <span className="time">2019.01.03 13：21</span>
                    </p>
                  </div>
                </li>
                <li>
                  <div className="user_info">
                    <img src="" alt=""/>
                    <span>你好</span>
                  </div>
                  <div className="evaluate_info">
                    <p className="level">
                      <span><i className=""></i>好评</span>
                      <span><i className=""></i>中评</span>
                      <span><i className=""></i>差评</span>
                    </p>
                    <p className="evaluate_info_item">哎呦，不错哦，物美价廉 ，值外观简洁轻便，推荐给身边的朋友了。</p>
                    <p className="evaluate_time">
                      <span className="good_type">智能运动手表2</span>
                      <span className="time">2019.01.03 13：21</span>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </GoodDetailWrap>
    );
  }
}

export default GoodDetail;
