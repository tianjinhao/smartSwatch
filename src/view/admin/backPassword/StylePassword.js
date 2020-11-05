import styled from 'styled-components'
const StylePassword = styled.div`
  ul{
    width: 1200px;
    height: 240px;
  }
  li{
    margin-left: 100px;
    list-style: none;
    width: 310px;
    background: linear-gradient(to right, #1892F7, #7FE4F8);
    border-radius: 12px;
    p{
      margin:10px;
      font-size: 24px;
      text-align: center;
      color: #FFFFFF;
      position: relative;
      i{
        font-size: 16px;
        font-style: normal;
      }
      span{
        position: absolute;
        right: 10px;
        top: 2px;
      }
    }
  }

  li:nth-child(1) {
    position: absolute;
    left: 0px;
    top: 140px;
  }
  li:nth-child(2) {
    position: absolute;
    left: 340px;
    top: 140px;
  }
  li:nth-child(3) {
    position: absolute;
    left: 680px;
    top: 140px;
  }
  li:nth-child(4) {
    position: absolute;
    left: 1020px;
    top: 140px;
  }

  
  input,button{  
    background:none;  
    outline:none;  
    border:none;
    line-height: 34px;
    margin-left: 10px;
  }
  a{
    text-decoration:none
  }
  input:focus{   
    border:1px solid #ccc;
    font-size: 28px;
  }

  input{
    width: 600px;
    height: 60px;
    line-height: 60px;
    font-size: 24px;
    background: #FFFFFF;
    border: 1px solid #B8B8B8;
    border-radius: 5px;
    position: absolute;
    margin-left: 480px;
  }
  input[name="email"]{
    top: 300px;
  }
  input[name="emails"]{
    top: 380px;
  }
  input[name="code"]{
    top: 380px;
    width: 200px;
  }
  input[name="next"]{
    top: 440px;
    width: 200px;
  }

  button[name="codes"]{
    border-radius: 5px;
    position: absolute;
    width: 150px;
    height: 62px;
    background: #FFFFFF;
    border: 1px solid #B8B8B8;
    top: 380px;
    margin-left: 720px;
    cursor: pointer;
  }
  button[name="next"]{
    width: 600px;
    height: 60px;
    background: #FFFFFF;
    border: 1px solid #B8B8B8;
    border-radius: 5px;
    top: 460px;
    margin-left: 480px;
    position: absolute;
    cursor: pointer;
  }


  h3{
    position: absolute;
    left: 500px;
    top: 250px;
    font-size: 18px;
    font-family: SourceHanSansCN;
    font-weight: bold;
    color: #80878A;
    letter-spacing:3px;
  }

  .back1 input{
    width: 200px;
    height: 40px;
    background: #FFFFFF;
    border: 1px solid #B8B8B8;
    border-radius: 5px;
    top: 320px;
  }
  .back1 button{
    border: none;
    width: 154px;
    font-size: 20px;
    font-family: SourceHanSansCN;
    font-weight: bold;
    color: #2099F7;
    top: 310px;
    margin-left: 750px;
  }


  h2{
    position: absolute;
    left: 500px;
    top: 250px;
    letter-spacing:3px;
    font-size: 40px;
    font-family: SourceHanSansCN;
    font-weight: bold;
    color: #80878A;
    line-height: 1px;
  }
  h4{
    position: absolute;
    left: 600px;
    top: 340px;
    width: 262px;
    height: 22px;
    font-size: 22px;
    font-family: SourceHanSansCN;
    font-weight: bold;
    color: #33B1E7;
    line-height: 1px;
    a{
      font-size: 24px;
      color:blue;
      margin-left: 20px
    }
  }
`



export {
  StylePassword
}