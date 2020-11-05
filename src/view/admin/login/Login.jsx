import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Index from '@ad/component/Index';

import Tvs from '../component/images/tvs.png';

import Reg from '../reg/Reg';
import BackPassword from '../backPassword/BackPassword';


import {
  StyleLogin
} from './StyleLogin'


class Login extends Component {
  state = {
    sendCode: '获取验证码',
    useremail: '',
    userpassword: '',
    code: '',
  }

  ClickSendCode = () => {
    return () => {
      this.setState({
        sendCode: "验证码已发送"
      })
    }
  }


  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {
    return (
      <>
        <Index></Index>
        <StyleLogin>
          <div>
            <h1>账号登录
            <img src={Tvs} alt="" />
            </h1>
          </div>
          <form onSubmit={this.handleSubmit}>
            <label>
              <input type="text" name="useremail" placeholder="邮箱登录" onChange={this.handleChange} />
            </label>
            <label>
              <input type="password" name="userpassword" placeholder="密码" onChange={this.handleChange} />
            </label>
            <label>
              <input type="text" name="code" placeholder="验证码" onChange={this.handleChange} />
              <button type="button" onClick={this.ClickSendCode(this.state.sendCode)}>{this.state.sendCode}</button>
            </label>
            <button className="login" value="Submit">
              登&nbsp;录
          </button>
          </form>
          <div className="loginBottom">
            <p className="loginReg"><Link to="/reglogin/reg">注&nbsp;册</Link>
              <span className="loginPassword"><Link to="/reglogin/backpassword">忘记密码？</Link></span>
            </p>
          </div>
          <Router>
            <Route path="/reglogin/reg" component={Reg}></Route>
          </Router>
          <Router>
            <Route path="/reglogin/backpassword" component={BackPassword}></Route>
          </Router>
        </StyleLogin>
      </>
    );
  }
}


export default Login

