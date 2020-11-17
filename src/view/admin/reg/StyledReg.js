import styled from 'styled-components'

const StyledReg = styled.div`
  background: #FCFEFE;
  box-shadow: 0px 4px 7px 0px rgba(85, 85, 85, 0.6);
  position:absolute;
  right: 280px;
  top: 150px;
  width: 400px;
  height: 410px;
  h1{ 
    margin :10px 0 20px 0;
    padding: 14px 64px;
    width: 242px;
    height: 24px;
    font-size: 24px;
    font-family: SourceHanSansCN;
    font-weight: 400;
    box-sizing: content-box;
    color: #494949;
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
    margin: 10px 45px;
    display: block;
    width: 330px;
    height: 40px;
    linhe-height: 40px;
    border: 1px solid #B8B8B8;
    border-radius: 4px;
    .form-text{
      color:red;
      font-size:14px;
    }
    span{
      width:40px;
      display:inline-block;
      font-size:16px;
      margin-left:10px;
    }
    button{
      margin-top: 8px;
      border-left: 1px solid #ccc;
      height: 24px;
      font-size: 14px;
      font-family: SourceHanSansCN;
      font-weight: 400;
      color: #5B5B5B;
      line-height: 18px;
      cursor: pointer;
    }
  }
  p{
    width: 288px;
    height: 18px;
    font-size: 12px;
    font-family: SourceHanSansCN;
    font-weight: 400;
    color: #323232;
    line-height: 18px;
    margin: 10px 46px;
    span{
      color: #4773FB;
    }
  }

  .reg{
    width: 280px;
    height: 40px;
    background: #4773FB;
    border-radius: 4px;
    margin: 10px 45px;
    cursor: pointer;
  }
  .regp{
    width: 28px;
    height: 13px;
    font-size: 14px;
    font-family: Adobe Heiti Std;
    font-weight: normal;
    color: #4773FB;
    line-height: 0px;
    outline:none;
  }

`

export {
  StyledReg
}