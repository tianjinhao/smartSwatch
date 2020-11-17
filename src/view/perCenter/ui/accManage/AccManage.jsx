import React from 'react';
import { AccManageWrap } from '../StyledPerCenter'
import UserInfo from './userinfo/UserInfo'
import Password from './password/Password'

function AccManage(props) {
  return (
    <AccManageWrap>
      <UserInfo></UserInfo>
      <Password></Password>
    </AccManageWrap>
  );
}

export default AccManage;