import React from "react";

import { PwdFormWrap } from "../../StyledPerCenter";
function PwdPhone(props) {
  return (
    <PwdFormWrap className="pwd_form pwd_phone">
      <h4>修改密码（验证手机）</h4>
      <label htmlFor="">
        <span>手机号</span>
        <input type="text" />
      </label>
      <label htmlFor="" className="phone_code">
        <span>验证码</span>
        <input type="text" />
        <p>获取验证码</p>
      </label>
      <div className="pwd_btn code_validate_btn">
        <span className="save" onClick={props.onChangePwdType("change")} >下一步</span>
        <span className="cancel" onClick={props.onChangePwdType("basic")}>取消</span>
      </div>
    </PwdFormWrap>
  );
}

export default PwdPhone;
