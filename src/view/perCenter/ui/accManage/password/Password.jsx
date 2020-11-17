import React, { Component } from "react";

import { PasswordWrap } from "../../StyledPerCenter";
import PwdBasic from './PwdBasic'
import PwdPhone from './PwdPhone'
import PwdChange from './PwdChange'

class Password extends Component {

  state = {
    type: "basic"
  }

  handleChangePwdType = (type) => {
    return () => {
      this.setState({
        type
      })
    }
    
  }
  render() {
    return (
      <PasswordWrap>
        <h3>
          <span>账号安全</span>
          <span>
            安全等级：<i>50</i>
          </span>
        </h3>
        <div className="pwd_wrap">

          {
            this.state.type === "basic" ? <PwdBasic onChangePwdType={this.handleChangePwdType}></PwdBasic> : ""
          }
          {
            this.state.type === "phone" ? <PwdPhone onChangePwdType={this.handleChangePwdType}></PwdPhone> : ""
          }
          {
            this.state.type === "change" ? <PwdChange onChangePwdType={this.handleChangePwdType}></PwdChange> : ""
          }
        </div>
      </PasswordWrap>
    );
  }
}

export default Password;
