import React from 'react';
import { LoginResWrap } from './StyledThomeNav'
import { Link } from 'react-router-dom'

function LoginRes(props) {
  return (
    <LoginResWrap>
      <li>
        <Link to="/reglogin/login">登录</Link>
      </li>
      <li>
        <Link to="/reglogin/login">注册</Link>
      </li>
    </LoginResWrap>
  );
}

export default LoginRes;