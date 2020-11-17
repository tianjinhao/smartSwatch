import styled from 'styled-components'
const StyleLogin = styled.div`
  background: #FCFEFE;
  box-shadow: 0px 4px 7px 0px rgba(85, 85, 85, 0.6);
  position:absolute;
  right: 280px;
  top: 150px;
  width: 380px;
  height: 390px;

  h1{ 
    margin :10px 0 20px 0;
    padding: 14px 136px;
    height: 34px;
    width: 96px;
    font-size: 24px;
    font-family: SourceHanSansCN;
    font-weight: 400;
    color: #494949;
    box-sizing: content-box;
    img{
      width: 22px;
      height: 41px;
      display: block;
      margin-top: -32px;
      margin-left: 196px;
      color: #555;
    }
  }
  input,button{  
    background:none;  
    outline:none;  
    border:none;
    line-height: 34px;
    margin-left: 6px;
  }
  a{
    text-decoration:none;
    box-sizing: content-box;
    color:#333;
  }
 
 
  label{
    margin: 18px 45px;
    display: block;
    width: 290px;
    height: 40px;
    linhe-height: 40px;
    border: 1px solid #B8B8B8;
    border-radius: 4px;
    .form-text{
      color:red;
      font-size:14px;
    }
    button{
      margin-top: 8px;
      border-left: 1px solid #ccc;
      height: 24px;
      font-size: 16px;
      font-family: SourceHanSansCN;
      font-weight: 400;
      color: #5B5B5B;
      line-height: 18px;
      cursor: pointer;
    }
  }
  .login{
    width: 280px;
    height: 40px;
    background: #4773FB;
    border-radius: 8px;
    margin:10px 46px;
    color:#F2F3F7;
    font-size: 18px;
    font-family: SourceHanSansCN;
    font-weight: 400;
    color: #F2F3F7;
    line-height: 1px;

  }
  .loginBottom{
    margin-top: 24px;
  }
  .loginReg{
    margin-left: 48px;
  }
  .loginPassword{
    float:right;
    margin-right: 40px;
  }

  input[name="code"]{
    width:126px;
    line-height:24px;
  }

  .codes{
    color:red;
    margin-left: 70px;
    margin-top: -10px;
  }
`
export {
  StyleLogin
}
