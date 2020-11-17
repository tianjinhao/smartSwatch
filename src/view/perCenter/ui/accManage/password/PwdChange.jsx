import React from "react";
import { PwdFormWrap } from "../../StyledPerCenter";
function PwdChange(props) {
  return (
    <PwdFormWrap className="pwd_form pwd_change">
      <h4>修改密码</h4>
      <label htmlFor="">
        <span>原密码</span>
        <input type="password" />
      </label>
      <label htmlFor="">
        <span>新密码</span>
        <input type="password" />
      </label>
      <label htmlFor="">
        <span>验证密码</span>
        <input type="password" />
      </label>
      <div className="pwd_btn pwd_change_btn">
        <span className="save">保存</span>
        <span className="cancel"  onClick={props.onChangePwdType("basic")}>取消</span>
      </div>
    </PwdFormWrap>
  );
}

export default PwdChange;
