import React, { useState, useEffect } from 'react';
import { LoginResWrap } from './StyledThomeNav'
import NotLogin from './NotLogin'
import ComLogin from './ComLogin'

function LoginRes(props) {
  const [loginType, setLoginType] = useState('')
  useEffect(() => {
    setLoginType(localStorage.getItem("username"))

  }, [])
  return (
    <LoginResWrap>
      {
        loginType ? <ComLogin></ComLogin> : <NotLogin></NotLogin>
      }
    </LoginResWrap>
  );
}

export default LoginRes;