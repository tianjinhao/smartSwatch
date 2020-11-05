import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

import { HomeNavWarp } from "./StyledThomeNav";
import logoW from "@a/images/home/nav/logo-白-1.png";
import logoN from "@a/images/home/nav/logo-渐变.png";
import LoginRes from './LoginRes'

import { Popover } from "element-react";

class ThomeNav extends Component {
  render() {
    return (
      <HomeNavWarp {...this.props}>
        <div className="home_nav">
          <Link to="/home">
            <h1 className="logo">
              <img
                src={this.bg === 1 ? logoW : logoN}
                alt=""
                className="logo-img"
              />
            </h1>
          </Link>
          <ul className="nav_list">
            <li className="">产品</li>
            <NavLink to="/shoppinglist"><li>商城</li></NavLink>
            <li>资讯</li>
            <li>服务</li>
          </ul>
          <div className="nav-right">
            <i className="yo-ico" title="搜索">&#xe657;</i>丨
            <Popover
              placement="bottom"
              width="50"
              trigger="click"
              content={
                <LoginRes></LoginRes>
              }
            >
              <i className="yo-ico" title="登录">&#xe609;</i>
            </Popover>丨
            <Link to='/shoppingcart'><i className="yo-ico" title="购物车"> &#xe602;</i></Link>
          </div>
        </div>
      </HomeNavWarp>
    );
  }
}

export default ThomeNav;
