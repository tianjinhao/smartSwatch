import React, { Component } from 'react';

import LoginForm from './LoginForm';
import Logo from "@ad/component/images/logo.png";
import Code from "@ad/component/images/code.png";

// import {
//   connect
// } from 'react-redux';
// import { actionCreators as loginActionCreators } from './store';
// import { bindActionCreators } from 'redux';

import {
  StyleHead,
  StyleBgPic,
  StyleFoot,
  StyleIndex
} from "./StyledAdmin";
class Login extends Component {
  render() {
    return (
      <>
        <StyleIndex>
          <StyleHead>
            <img src={Logo} alt="" />
          </StyleHead>
          <StyleBgPic>
             <LoginForm {...this.props} />
          </StyleBgPic>
         

          <StyleFoot>
            &copy;2020&nbsp;&nbsp;&nbsp;SmartWatch&nbsp;&nbsp;&nbsp;Technology CO.,Ltd.All Rigths Reserved. 网站使用条款&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;隐私条款&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;粤ICP备&nbsp;&nbsp;&nbsp;14040171号-1
            <div className="code">
              <img src={Code} alt="" />
            </div>
          </StyleFoot>
        </StyleIndex>

      </>
    )
  }
}
// const mapStateToProps = state => {
//   return {
//     loginData: state.login
//   }
// }


// const mapDispatchToProps = dispatch => {
//   return {
//     loginFn: bindActionCreators(loginActionCreators, dispatch)
//   }
// }


// export default connect(mapStateToProps, mapDispatchToProps)(Login)
export default Login
