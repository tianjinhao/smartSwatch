import React from "react";
import { Link } from 'react-router-dom'
function ComLogin(props) {
  const signOut = () => {
    localStorage.clear()
  }


  return (
    <>
      <li>
        <Link to="/shoppingcart/percenter/accmanage">个人中心</Link>
      </li>
      <li>
        <Link to="/reglogin/login" onClick={signOut}>退出</Link>
      </li>
    </>
  );
}

export default ComLogin;
