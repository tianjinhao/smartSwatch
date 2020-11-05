import React, { Component } from 'react';

import { Link } from 'react-router-dom'
import Index from '@ad/component/Index';

import {
  StylePassword
} from './StylePassword'


export default class BackPassword extends Component {
  state = {
    sendCode: '获取验证码',
    backList: [
      {
        "title": "Step1",
        "content": " 填写找回信息",
        "id": "001",
        "svg": <svg t="1603790812446" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="18141" width="32" height="32"><path d="M512 967.111111c251.363556 0 455.111111-203.747556 455.111111-455.111111S763.363556 56.888889 512 56.888889 56.888889 260.636444 56.888889 512s203.747556 455.111111 455.111111 455.111111z m0-56.888889c-219.932444 0-398.222222-178.289778-398.222222-398.222222S292.067556 113.777778 512 113.777778s398.222222 178.289778 398.222222 398.222222-178.289778 398.222222-398.222222 398.222222z m-28.444444-267.776l-150.556445-150.556444a28.444444 28.444444 0 0 0-40.220444 40.220444l199.111111 199.111111a28.444444 28.444444 0 0 0 40.220444 0l199.111111-199.111111a28.444444 28.444444 0 0 0-40.220444-40.220444L540.444444 642.446222V312.888889a28.444444 28.444444 0 0 0-56.888888 0v329.557333z" p-id="18142" fill="#ffffff"></path></svg>
      },
      {
        "id": "002",
        "title": "Step2",
        "content": " 安全验证",
        "svg": <svg t="1603810662095" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="18572" width="32" height="32"><path d="M967.111111 512c0 251.363556-203.747556 455.111111-455.111111 455.111111S56.888889 763.363556 56.888889 512 260.636444 56.888889 512 56.888889s455.111111 203.747556 455.111111 455.111111z m-56.888889 0c0-219.932444-178.289778-398.222222-398.222222-398.222222S113.777778 292.067556 113.777778 512s178.289778 398.222222 398.222222 398.222222 398.222222-178.289778 398.222222-398.222222z m-267.776-28.444444l-150.556444-150.556445a28.444444 28.444444 0 0 1 40.220444-40.220444l199.111111 199.111111a28.444444 28.444444 0 0 1 0 40.220444l-199.111111 199.111111a28.444444 28.444444 0 0 1-40.220444-40.220444L642.446222 540.444444H312.888889a28.444444 28.444444 0 0 1 0-56.888888h329.557333z" p-id="18573" fill="#ffffff"></path></svg>
      },
      {
        "id": "003",
        "title": "Step3",
        "content": " 填写找回信息",
        "svg": <svg t="1603810662095" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="18572" width="32" height="32"><path d="M967.111111 512c0 251.363556-203.747556 455.111111-455.111111 455.111111S56.888889 763.363556 56.888889 512 260.636444 56.888889 512 56.888889s455.111111 203.747556 455.111111 455.111111z m-56.888889 0c0-219.932444-178.289778-398.222222-398.222222-398.222222S113.777778 292.067556 113.777778 512s178.289778 398.222222 398.222222 398.222222 398.222222-178.289778 398.222222-398.222222z m-267.776-28.444444l-150.556444-150.556445a28.444444 28.444444 0 0 1 40.220444-40.220444l199.111111 199.111111a28.444444 28.444444 0 0 1 0 40.220444l-199.111111 199.111111a28.444444 28.444444 0 0 1-40.220444-40.220444L642.446222 540.444444H312.888889a28.444444 28.444444 0 0 1 0-56.888888h329.557333z" p-id="18573" fill="#ffffff"></path></svg>
      },
      {
        "id": "004",
        "title": "Step4 填写找回信息",
        "svg": <svg t="1603810662095" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="18572" width="32" height="32"><path d="M967.111111 512c0 251.363556-203.747556 455.111111-455.111111 455.111111S56.888889 763.363556 56.888889 512 260.636444 56.888889 512 56.888889s455.111111 203.747556 455.111111 455.111111z m-56.888889 0c0-219.932444-178.289778-398.222222-398.222222-398.222222S113.777778 292.067556 113.777778 512s178.289778 398.222222 398.222222 398.222222 398.222222-178.289778 398.222222-398.222222z m-267.776-28.444444l-150.556444-150.556445a28.444444 28.444444 0 0 1 40.220444-40.220444l199.111111 199.111111a28.444444 28.444444 0 0 1 0 40.220444l-199.111111 199.111111a28.444444 28.444444 0 0 1-40.220444-40.220444L642.446222 540.444444H312.888889a28.444444 28.444444 0 0 1 0-56.888888h329.557333z" p-id="18573" fill="#ffffff"></path></svg>
      },
    ]
  }


  ClickSendCode = () => {
    return () => {
      this.setState({
        sendCode: "验证码已发送"
      })
    }
  }


  render() {
    return (
      <>
        <Index></Index>
        <StylePassword>
          <ul>
            {
              this.state.backList.map(value => (
                <li key={value.id}>
                  <p>{value.title}
                    <i>{value.content}</i>
                    <span>{value.svg}</span>
                  </p>
                </li>
              )
              )
            }
          </ul>
          <div>
            <input type="text" name="email" placeholder="请输入你的邮箱" />
          </div>
          <div>
            <input type="text" name="code" placeholder="验证码" />
            <button type="button" name="codes" onClick={this.ClickSendCode(this.state.sendCode)}>{this.state.sendCode}</button>

          </div>
          <div>
            <Link to="backpassword2">
              <button name="next">下一步</button>
            </Link>
          </div>
        </StylePassword>
      </>
    );
  }
}