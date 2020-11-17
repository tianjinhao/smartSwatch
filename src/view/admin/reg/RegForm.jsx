import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import http from '@u/http.js';

import Login from '@ad/login/Login';

import {
  StyledReg
} from './StyledReg'

class RegForm extends Component {
  state = {
    userInfo: {
      telephone: '',
      password: '',
      code: '',
    },
    sendCode: '获取验证码',
    regPhone: '',
    regPassword: '',
    regPassword2: '',
    aaa: false,
    bbb: false,
    ccc: false,
    ddd: false,
    eee: false,
  }

  ClickSendCode = () => {
    return async () => {
      let telephone = document.querySelector('#phone').value

      let myreg = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0-9]{1})|(15[0-3]{1})|(15[4-9]{1})|(18[0-9]{1})|(199))+\d{8})$/;

      if (telephone === '') {
        this.setState({
          regPhone: '手机号不能为空'
        })
      } else if (telephone.length !== 11) {
        this.setState({
          regPhone: '手机号有误'
        })
      } else if (!myreg.test(telephone)) {
        this.setState({
          regPhone: '请输入有效的手机号码！'
        })
      } else {
        let result = await http.get("/user/validatecode?telephone=" + telephone.toString())
        console.log(result);
        if (result.message === "success") {
          this.setState({
            sendCode: "验证码已发送"
          })
        }
      }
    }
  }

  changeValuephone = e => {
    let telephone = document.querySelector('#phone').value
    if (telephone === "") {
      this.setState({
        regPhone: '手机号不能为空'
      })
    } else {
      this.setState({
        regPhone: ''
      })
    }
  }

  handleChangepassword = e => {
    let password = document.querySelector('#password1').value;

    if (password === "") {
      this.setState({
        regPassword: '密码不能为空1'
      })
    } else {
      this.setState({
        regPassword: ''
      })
    }
  }

  handleChangepassword1 = e => {
    let password2 = document.querySelector('#password2').value;
    if (password2 === "") {
      this.setState({
        regPassword2: '密码不能为空2'
      })
    } else {
      this.setState({
        regPassword2: ''
      })
    }
  }

  handleChange = () => {
    return (e) => {
      this.setState({
        userInfo: {
          ...this.state.userInfo,
          [e.target.name]: e.target.value
        },
      })
    }
  }

  handleSubmit = async e => {
    e.preventDefault()

    let telephone = document.querySelector('#phone').value
    if (telephone === "") {
      this.setState({
        regPhone: '手机号不能为空'
      })
    } else {
      this.setState({
        regPhone: ''
      })
    }

    let myreg = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0-9]{1})|(15[0-3]{1})|(15[4-9]{1})|(18[0-9]{1})|(199))+\d{8})$/;

    if (telephone === '') {
      this.setState({
        regPhone: '手机号不能为空'
      })
    } else if (telephone.length !== 11) {
      this.setState({
        regPhone: '手机号有误'
      })
    } else if (!myreg.test(telephone)) {
      this.setState({
        regPhone: '请输入有效的手机号码！'
      })
    } else {
      this.setState({
        aaa: true,
      })
    }


    let password = document.querySelector('#password1').value;
    let password2 = document.querySelector('#password2').value;

    let regPassword = "^(?!^[0-9]+$)(?!^[a-zA-Z]+$)[0-9a-zA-Z_]{6,16}$";

    if (password === "") {
      this.setState({
        regPassword: '密码不能为空'
      })
    } else {
      this.setState({
        regPassword: '',
        bbb: true,
      })
    }

    if (password2 === "") {
      this.setState({
        regPassword2: '密码不能为空',
      })
    } else {
      this.setState({
        regPassword2: '',
        ccc: true,
      })
    }

    let passwordFalg = password.search(regPassword);
    if (passwordFalg === -1) {
      this.setState({
        regPassword: '密码格式不正确',
      })
    } else {
      this.setState({
        ddd: true,
      })
    }

    if (password !== password2) {
      this.setState({
        regPassword: '两次密码不一致',
        regPassword1: '两次密码不一致',
      })
    } else {
      this.setState({
        regPassword: '',
        regPassword1: '',
        eee: true
      })
    }

    if (this.state.aaa && this.state.bbb && this.state.ccc && this.state.ddd && this.state.eee) {

      let data = {
        telephone: this.state.userInfo.telephone,
        code: this.state.userInfo.code,
        password: this.state.userInfo.password
      }

      const result = await http.post('/user/rejist', data)

      if (result.message === "注册成功！") {

        this.props.history.push('/reglogin/login')

      } else {
        this.state.userInfo.telephone = ''
        this.state.userInfo.code = ''
        this.state.userInfo.password = ''
      }
    }

  }

  render() {
    return (
      <>
        <StyledReg>
          <form id="reg" onSubmit={this.handleSubmit}>
            <h1>注册SmartWatch账号</h1>
            <label>
              <input
                id="phone"
                className="form-control"
                type="text"
                aria-describedby="phoneHelp"
                onBlur={this.changeValuephone}
                onChange={this.handleChange()}
                name="telephone"
                placeholder="手机号登录"
                autoComplete="off"
                maxLength="11"
              />
              <small
                id="phoneHelp"
                className="form-text text-muted"
              >{this.state.regPhone}</small>
            </label>
            <label forhtml="code">
              <input
                id="code"
                className="form-control"
                type="text"
                onChange={this.handleChange()}
                name="code"
                placeholder="验证码"
                autoComplete="off"
                maxLength="6"
              />
              <button
                type="button"
                onClick={this.ClickSendCode(this.state.sendCode)}
              >{this.state.sendCode}</button>
            </label>
            <label forhtml="password1">
              <input
                id="password1"
                className="form-control"
                type="password"
                onBlur={this.handleChangepassword}
                onChange={this.handleChange()}
                name="password"
                placeholder="密码"
                autoComplete="off"
              />
              <small
                id="phoneHelp"
                className="form-text text-muted"
              >{this.state.regPassword}</small>
            </label>

            <label forhtml="password2">
              <input
                id="password2"
                className="form-control"
                type="password"
                onBlur={this.handleChangepassword1}
                onChange={this.handleChangepassword1}
                name="password"
                placeholder="确认密码"
                autoComplete="off"
              />
              <small
                id="phoneHelp"
                className="form-text text-muted"
              >{this.state.regPassword1}</small>
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

export default RegForm