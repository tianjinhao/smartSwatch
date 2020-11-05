import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import {
  connect
} from 'react-redux';
import { actionCreators as registerActionCreators } from './store';
import { bindActionCreators } from 'redux';

import Index from '@ad/component/Index';
import Login from '@ad/login/Login';


import {
  StyledReg
} from './StyledReg'


class Reg extends Component {

  state = {
    sendCode: '获取验证码',
    useremail: '',
    userpassword1: '',
    userpassword2: '',
    code: '',
  }

  ClickSendCode = () => {
    return () => {
      this.setState({
        sendCode: "验证码已发送"
      })
    }
  }

  handleSubmit = async e => {
    e.preventDefault()
    console.log(this.state);
    const { data } = await this.props.registerFn.regAc(this.state)
    console.log(data);
    // console.log(this.props.registerData.name);
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
        <StyledReg>
          <form id="reg" onSubmit={this.handleSubmit}>
            <h1>注册SmartWatch账号</h1>
            <label>
              <input type="text" name="useremail" placeholder="请输入你的邮箱" onChange={this.handleChange} />
            </label>
            <label>
              <input type="text" name="code" placeholder="验证码" onChange={this.handleChange} />
              <button type="button" onClick={this.ClickSendCode(this.state.sendCode)}>{this.state.sendCode}</button>
            </label>
            <label>
              <input type="password" name="userpassword1" placeholder="密码" onChange={this.handleChange} />
            </label>
            <label>
              <input type="password" name="userpassword2" placeholder="确认密码" onChange={this.handleChange} />
            </label>
            <p>
              点击立即注册，即表示您同意并愿意遵守<span>**服务协议</span>和<span>法律声明</span>
            </p>
            <button className="reg" onClick={this.regHandleClick} type="submit" onChange={this.handleChange}>立即注册</button>
            <p className="regp"><Link to="/reglogin/login">登&nbsp;录</Link></p>
          </form>
          <Router>
            <Route path="/reglogin/login" component={Login}></Route>
          </Router>
        </StyledReg>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    registerData: state.register
  }
}


const mapDispatchToProps = dispatch => {
  return {
    registerFn: bindActionCreators(registerActionCreators, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Reg)