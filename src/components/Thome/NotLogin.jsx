import React from 'react';
import { Link } from 'react-router-dom'
function NotLogin(props) {
  return (
    <>
      <li>
        <Link to="/reglogin/login">登录</Link>
      </li>
      <li>
        <Link to="/reglogin/login">注册</Link>
      </li>
    </>
  );
}

export default NotLogin;