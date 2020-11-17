import React, { Component } from 'react';

import Logo from "@ad/component/images/logo.png";
import Code from "@ad/component/images/code.png";

import {
  StylePassword
} from './StylePassword'
import {
  StyleHead,
  StyleBgPic,
  StyleFoot,
  StyleIndex
} from "./StyledAdmin";

export default class BackPassword extends Component {
  state = {
    backList: [
      {
        "title": "Step1",
        "content": " 填写找回信息",
        "id": "001",
        "svg": <svg t="1603810662095" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="18572" width="32" height="32"><path d="M967.111111 512c0 251.363556-203.747556 455.111111-455.111111 455.111111S56.888889 763.363556 56.888889 512 260.636444 56.888889 512 56.888889s455.111111 203.747556 455.111111 455.111111z m-56.888889 0c0-219.932444-178.289778-398.222222-398.222222-398.222222S113.777778 292.067556 113.777778 512s178.289778 398.222222 398.222222 398.222222 398.222222-178.289778 398.222222-398.222222z m-267.776-28.444444l-150.556444-150.556445a28.444444 28.444444 0 0 1 40.220444-40.220444l199.111111 199.111111a28.444444 28.444444 0 0 1 0 40.220444l-199.111111 199.111111a28.444444 28.444444 0 0 1-40.220444-40.220444L642.446222 540.444444H312.888889a28.444444 28.444444 0 0 1 0-56.888888h329.557333z" p-id="18573" fill="#ffffff"></path></svg>
      },

      {
        "id": "002",
        "title": "Step2",
        "content": " 填写找回信息",
        "svg": <svg t="1603810662095" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="18572" width="32" height="32"><path d="M967.111111 512c0 251.363556-203.747556 455.111111-455.111111 455.111111S56.888889 763.363556 56.888889 512 260.636444 56.888889 512 56.888889s455.111111 203.747556 455.111111 455.111111z m-56.888889 0c0-219.932444-178.289778-398.222222-398.222222-398.222222S113.777778 292.067556 113.777778 512s178.289778 398.222222 398.222222 398.222222 398.222222-178.289778 398.222222-398.222222z m-267.776-28.444444l-150.556444-150.556445a28.444444 28.444444 0 0 1 40.220444-40.220444l199.111111 199.111111a28.444444 28.444444 0 0 1 0 40.220444l-199.111111 199.111111a28.444444 28.444444 0 0 1-40.220444-40.220444L642.446222 540.444444H312.888889a28.444444 28.444444 0 0 1 0-56.888888h329.557333z" p-id="18573" fill="#ffffff"></path></svg>
      },
      {
        "id": "003",
        "title": "Step3 找回密码",
        "svg": <svg t="1603790812446" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="18141" width="32" height="32"><path d="M512 967.111111c251.363556 0 455.111111-203.747556 455.111111-455.111111S763.363556 56.888889 512 56.888889 56.888889 260.636444 56.888889 512s203.747556 455.111111 455.111111 455.111111z m0-56.888889c-219.932444 0-398.222222-178.289778-398.222222-398.222222S292.067556 113.777778 512 113.777778s398.222222 178.289778 398.222222 398.222222-178.289778 398.222222-398.222222 398.222222z m-28.444444-267.776l-150.556445-150.556444a28.444444 28.444444 0 0 0-40.220444 40.220444l199.111111 199.111111a28.444444 28.444444 0 0 0 40.220444 0l199.111111-199.111111a28.444444 28.444444 0 0 0-40.220444-40.220444L540.444444 642.446222V312.888889a28.444444 28.444444 0 0 0-56.888888 0v329.557333z" p-id="18142" fill="#ffffff"></path></svg>
      },
    ]
  }


  againChange (){
    localStorage.clear();
  }

  render() {
    return (
      <>
        <StyleIndex>
          <StyleHead>
            <img src={Logo} alt="" />
          </StyleHead>
          <StyleBgPic>
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
              <h2>您的密码已重置成功</h2>
              {/* <h4><span>3</span>秒后将为您自动跳转...</h4> */}
              <h4>
                <a href="/reglogin/login" onClick={this.againChange}>请点击重新登录</a>
              </h4>
            </StylePassword>
          </StyleBgPic>


          <StyleFoot>
            &copy;2020&nbsp;&nbsp;&nbsp;SmartWatch&nbsp;&nbsp;&nbsp;Technology CO.,Ltd.All Rigths Reserved. 网站使用条款&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;隐私条款&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;粤ICP备&nbsp;&nbsp;&nbsp;14040171号-1
            <div className="code">
              <img src={Code} alt="" />
            </div>
          </StyleFoot>
        </StyleIndex>


      </>
    );
  }
}