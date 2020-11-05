import styled from 'styled-components'
const StyleLogin = styled.div`
  background: #FCFEFE;
  box-shadow: 0px 4px 7px 0px rgba(85, 85, 85, 0.3);
  z-index: 111;
  position:absolute;
  right: 310px;
  top: 198px;

  width: 370px;
  height: 380px;
  h1{ 
    padding: 14px 136px;
    height: 24px;
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
  input:focus{   
    border:none;
    font-size: 12px;
  }
 
  label{
    margin: 10px 45px;
    display: block;
    width: 310px;
    height: 40px;
    linhe-height: 40px;
    border: 1px solid #B8B8B8;
    border-radius: 8px;
    button{
      margin-top: 12px;
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
  }
  .loginBottom{
    margin-top: 44px;
  }
  .loginReg{
    margin-left: 48px;
  }
  .loginPassword{
    float:right;
    margin-right: 40px;
  }
`
export {
  StyleLogin
}
