import styled from 'styled-components'

const PerCenterUiWrap = styled.div `
  width: 910px;
  padding: 0 32px;
`

const AddressWrap = styled.div `
  width: 100%;
  h2{
    line-height:40px;
    font-size: 16px;
    font-weight: bold;
    color: #626262;
    border-bottom: 1px solid #EAEAEA;
    span{
      display:inline-block;
      padding: 0 8px;
      border-bottom: 1px solid #3FD2F8;
    }
  }
  
  
  .current_address{
    h3{
      display:flex;
      font-size: 16px;
      font-weight: bold;
      color: #626262;
      line-height:40px;
      text-indent: 8px;
    }
    .add_tab{
      width: 100%;
      color: #626262;
      th, td{
        text-align: center;
      }
      thead{
        tr{
          height: 40px;
          background: #FAFAFC;
          margin-bottom: 15px;
          line-height:40px;
          th:nth-child(1){
            width: 14%;
          }
          th:nth-child(2){
            width: 40%;
          }
          th:nth-child(3){
            width: 22%;
          }
          &:nth-child(2){
            height: 15px;
          }
        }
      }
      tfoot{
        margin-bottom:240px;
        
      }

    }
  }

`


const AddressFormWrap = styled.div `
  padding: 30px 0 0 10px;
  .ant-form.ant-form-inline{
    .ant-form-item-with-help{
      margin-bottom: 0;
    }
    .ant-form-item{
      height: 62px;
      .ant-form-item-label{
        .ant-form-item-required{
          color: #8E8E8E;
          width:110px;
        }
      }
      .ant-form-item-control{
        #user_name{
          width: 322px;
          height: 36px;
        }
        #user_phone{
          width: 246px;
          height: 36px;
        }
        #user_phone{
          width: 246px;
          height: 36px;
        }
        #user_minute{
          width: 722px;
          height: 36px;
        }
        .ant-select{
          width: 192px;
          margin-right: 10px;
          display: inline-block;
          .ant-select-selector{
            height: 36px;
            .ant-select-selection-placeholder, .ant-select-selection-item{
              line-height: 34px;
            }
            .ant-select-selection-search-input{
              height: 36px;
            }
          }
        }
        .ant-select-selector{

        }
      }
    }
    .t_address_submit{
      width: 100%;
      padding-top: 10px;
      .ant-form-item-control-input-content{
        display: flex;
        justify-content: flex-end;
        .ant-btn-primary{
          width: 100px;
          height: 36px; 
          border-radius: 5px;
        }
      }
    }
  }
  
`


const AccManageWrap = styled.div `
  width: 100%;

`

const UserInfoWrap = styled.div `
  height: 265px;
  h2{
    line-height:40px;
    font-size: 16px;
    font-weight: bold;
    color: #626262;
    border-bottom: 1px solid #EAEAEA;
    span{
      display:inline-block;
      padding: 0 8px;
      border-bottom: 1px solid #3FD2F8;
    }
  }
  .user_info{
    padding: 28px 0 0 8px;
    height: 223px;
    display: flex;

    .avatar{
      width: 100px;
      height: 100px;
      background: #d8d8d8;
      position: relative;
      margin-right: 38px;
      span{
        position: absolute;
        left:0;
        bottom: 0;
        width: 100%;
        height: 20px;
        text-align: center;
        line-height: 20px;
        color: #fff;
        background: #adadad;
        cursor: pointer;
      }
    }
    .user_name_wrap{
      display: none;
      &.show{
        display: block;
      }
      padding-top: 10px;
      .user_name{
        font-size:16px;
        color: #818381;
        margin-bottom: 26px;
      }
      .user_name_btn{
        width: 140px;
        height: 40px;
        border-radius: 5px;
        background: #2ab3fd;
        font-size:16px;
        text-align:center;
        color: #fff;
        line-height: 40px;
        cursor: pointer;
      }
    }
    .change_user_name{
      display: none;
      &.show{
        display: block;
      }
      .name_input.error{

        &+.error_text{
          color: red;
          margin-left: 22px;
        }
      }
      
      input{
        width: 340px;
        height: 52px;
        font-size: 18px;
        border: 1px solid #E6E6E6;
        padding: 0 20px;
        color:#818381;
        margin-bottom: 20px;
        &+.error_text{
          color: red;
          margin-left: 22px;
        }
        &.error{
          border-color: red;
        }
        &.success{
          border-color: green;
        }
      }
      .change_user_name_btn{
        width: 340px;
        display: flex;
        justify-content: space-between;
        span{
          display: inline-block;
          cursor: pointer;
          width: 140px;
          height: 40px;
          background: #2AB3FD;
          border-radius: 4px;
          text-align:center;
          color: #fff;
          line-height: 40px;
          &.cancel{
            background: #D9D9D9;
          }
        }
      }
    }
  }
`


const PasswordWrap = styled.div `
  padding: 0 30px 0 8px;
  color: #878787;
  h3{
    font-size: 18px;
    font-weight: 600;
    line-height:40px;
    color: #878787;
    display: flex;
    justify-content: space-between;
    i{
      color: #4FBAFA;
    }
  }
  .pwd_wrap{
    .pwd_basic{
      
    }
    
  }
`

const PwdBasicWrap = styled.div `
  padding-top: 40px;
  display: flex;
  justify-content: space-between;
  span:nth-child(2){
    color: #4FBAFA;
    cursor: pointer;
    font-weight:bold;
  }
`

const PwdFormWrap = styled.div `
  padding-top: 40px;
  border-top: 1px solid #E6E6E6;
  h4{
    font-size: 18px;
    font-weight: bold;
    color: #878787;
    margin-bottom: 30px;
  }
  label{
    display: block;
    color: #878787;
    margin-bottom: 22px;
    position: relative;
    width: 450px;
    span{
      display: inline-block;
      width: 96px;
    }
    input{
      width: 354px;
      height: 55px;
      border: 1px solid #E6E6E6;
      text-indent: 16px;
    }
    &.phone_code{
      input{
        width: 254px;
      }
      p{
        box-sizing: border-box;
        position: absolute;
        right: 0;
        top: 0;
        line-height: 53px;
        width: 100px;
        border: 1px solid #E6E6E6;
        border-left: none;
        text-align:center;
        z-index: 99;
        background: #fff;
        cursor: pointer;
        &:hover{
          color: #4fbafa;
        }
      }
        
    }
  }
  .pwd_btn{
    margin-left: 96px;
    width: 354px;
    display:flex;
    justify-content: space-between;
    span{
      display: inline-block;
      cursor: pointer;
      width: 140px;
      height: 40px;
      background: #2AB3FD;
      border-radius: 4px;
      text-align:center;
      color: #fff;
      line-height: 40px;
      &.cancel{
        background: #D9D9D9;
      }
    }
  }
`

const AddressTrWrap = styled.tr `
  height: 52px;
  border: 1px solid #F8F8F8;
  line-height:52px;
  margin-bottom: 15px;
  .oper{
    display: flex;
    justify-content:center;
    &>div{
      width: 50%;
      cursor: pointer;
    }
    .amend{
      text-align: right;
      padding-right: 5px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      span{
        color: #484848;
        font-weight: bold;
      }
      .am_btn{
        width:56px;
        height: 100%;
        .default{
          width:54px;
          height: 22px;
          font-size: 12px;
          line-height: 22px;
          text-align: center;
          background: #4fbafa;
          color: #fff;
          cursor: pointer;
          border-radius: 5px;
          display: none;
        }
      }
    }
    .del{
      padding-left:5px;
      text-align:left;
    }
  }
  &.show{
    border: 1px solid #3699ff;
    background: #f8f8f8;
    .oper{
      .amend{
        span{
          color: #4FBAFA;
        }
        .am_btn{
          .default{
            display: inline-block;
          }
        }
      }
    }
  }

`
export {
  PerCenterUiWrap,
  AddressWrap,
  AccManageWrap,
  UserInfoWrap,
  PasswordWrap,
  PwdBasicWrap,
  PwdFormWrap,
  AddressFormWrap,
  AddressTrWrap
}