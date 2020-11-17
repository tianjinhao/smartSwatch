import React from 'react';
import { PwdBasicWrap } from '../../StyledPerCenter'
function PwdBasic(props) {
  return (
    <PwdBasicWrap className="pwd_basic">
      <span>密码</span>
      <span onClick={props.onChangePwdType("phone")}>修改</span>
    </PwdBasicWrap>
  );
}

export default PwdBasic;