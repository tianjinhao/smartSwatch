import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import http from '@u/http.js';

import Tvs from '@ad/component/images/tvs.png';

import Reg from '../reg/Reg';
import BackPassword from '../backPassword/BackPassword';

import {
  StyleLogin
} from './StyleLogin'

class LoginForm extends Component {
  state = {
    userInfo: {
      telephone: '',
      code: '',
      password: '',
    },
    sendCode: '获取验证码',
    errMsg: [],
    loginPhone: '',
    loginPassword: '',
    logincode: '',
    flag: '',
    coded: '验证码错误'
  }





  ClickSendCode = () => {
    return async () => {
      let telephone = document.querySelector('#phone').value

      if (telephone === '') {
        this.setState({
          loginPhone: '手机号有误'
        })
      } else {
        let result = await http.get("/user/validatecode?telephone=" + telephone.toString())

        //let result = await http.get("http://8.131.73.21:8080/user/validatecode?telephone=" + telephone.toString())


        this.setState({
          sendCode: "验证码已发送"
        })

        console.log(result);
      }
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


  changeValuephone = e => {
    let user = e.target.value
    if (user === "") {
      this.setState({
        loginPhone: '手机号不能为空'
      })
    } else {
      this.setState({
        loginPhone: ''
      })
    }

  }

  handleChangepassword = e => {
    let password = e.target.value
    if (password === "") {
      this.setState({
        loginPassword: '密码不能为空'
      })
    } else {
      this.setState({
        loginPassword: ''
      })
    }
  }

  handlechangecode = e => {
    let code = e.target.value

    if (code === "") {
      this.setState({
        flag: "flase"
      })
    } else {
      this.setState({
        flag: ''
      })
    }
  }


  handleSubmit = async e => {
    e.preventDefault()
    this.setState({
      errMsg: []
    })
    console.log(this.state.userInfo);


    let data = {
      'telephone': this.state.userInfo.telephone,
      'code': this.state.userInfo.code,
      'password': this.state.userInfo.password
    }

    const result = await http.post('/user/loginByAccount', JSON.stringify(data) )
    // const result = await post('http://8.131.73.21:8080/user/loginByAccount', data)



    console.log(result);

    if (result.message === "success") {

      localStorage.setItem('nickname', result.data.nickname)
      localStorage.setItem('userId', result.data.userId)
      localStorage.setItem('telephone', result.data.telephone)
      localStorage.setItem('username', result.data.username)

      // 登录成功返回首页面
      this.props.history.push('/home')
    } else {
      alert("账号或密码错误")
      this.setState({
        userInfo: {
          telephone: '',
          password: '',
          code: '',
        },
      })
    }

  }

  render() {
    return (
      <StyleLogin>
        <div>
          <h1>账号登录
            <img src={Tvs} alt="" />
          </h1>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label forhtml="phone">
              <input
                id="phone"
                className="form-control"
                type="text"
                aria-describedby="phoneHelp"
                onBlur={this.changeValuephone}
                onChange={this.handleChange()}
                value={this.state.userInfo.telephone}
                name="telephone"
                placeholder="手机号登录"
                autoComplete="off"
              />

              <small
                id="phoneHelp"
                className="form-text text-muted"
              >{this.state.loginPhone}</small>

            </label>
          </div>
          <div className="form-group">
            <label forhtml="exampleInputPassword1">
              <input
                id="password"
                className="form-control"
                type="password"
                onBlur={this.handleChangepassword}
                /*  onChange={this.handleChangepassword} */
                onChange={this.handleChange()}
                value={this.state.userInfo.password}
                name="password"
                placeholder="密码"
                autoComplete="off"
              />
              <small
                id="phoneHelp"
                className="form-text text-muted"
              >{this.state.loginPassword}</small>
            </label>
          </div>
          <div className="form-group">
            <label forhtml="code">
              <input
                id="code"
                className="form-control"
                type="text"
                onBlur={this.handlechangecode}
                onChange={this.handleChange()}
                value={this.state.userInfo.code}
                name="code"
                placeholder="验证码"
                autoComplete="off"
              />
              <small
                id="phoneHelp"
                className="form-text text-muted"
              >{this.state.logincode}</small>
              <button
                type="button"
                onClick={this.ClickSendCode(this.state.sendCode)}
              >{this.state.sendCode}</button>
            </label>
          </div>
          {
            this.state.flag === '' ? '' : <div className="codes">验证码有误重新输入</div>
          }


          <button
            className="login"
            value="Submit"
          >
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
    );
  }

}

export default LoginForm