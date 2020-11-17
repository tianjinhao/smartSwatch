import styled from 'styled-components'
import buy_spirit from '@a/images/buy/立即购买-精灵图.png'


// 确认订单
const OrderWrap = styled.div `
  width: 100%;
  .confirm_order{
    width:1300px;
    margin: 0 auto;
    min-height: 500px;
    margin-bottom: 70px;
    .ant-breadcrumb{
      font-size: 16px;
    }
    .confirm_order_header{
      display: flex;
      padding-top: 100px;
      justify-content: space-between;
      font-size: 16px;
      line-height:20px;
      margin-bottom: 40px;
      .my_order{
        cursor: pointer;
      }
    }
    
  }
`

// 支付成功
const CompleteOrderWrap = styled.div `
  width: 1300px;
  margin: 0 auto;
  min-height: 580px;
  padding-top: 100px;
  .complete_order{
    width:100%;
    height: 260px;
    border: 1px solid #E6E6E6;
    display: flex;
    align-items: center;
    justify-content: center;
    .complete_logo{
      width: 118px;
      height: 118px;
      background: url(${buy_spirit});
      background-position: -135px -726px;
      margin-right:120px;
    }
    .complete_order_info{
      p{
        font-size: 18px;
        color: #A9A9A9;
        line-height: 26px;
      }
      p:nth-child(1){
        font-size: 30px;
        font-weight: bold;
        color: #464646;
        line-height: 60px;
      }
      p:nth-child(2) {
        margin-bottom: 20px;
      }
      p:nth-child(3) {
        cursor: pointer;
      }
    }
  }
`


// 购物车无商品
const NullCartWrap = styled.div `
  width:1300px;
  margin: 0px;
  height: 410px;
  display: flex;
  align-items: center;
  justify-content: center;
  .null_cart_logo{
    width: 130px;
    height: 148px;
    background: url(${buy_spirit});
    background-position: -322px -717px;
    margin-right: 50px;
  }
  .null_cart_info{
    padding-top: 30px;
    p:nth-child(1) {
      font-size: 24px;
      color: #464646;
    }
    p:nth-child(2){
      width: 256px;
      height: 66px;
      border: 1px solid #00A0E9;
      border-radius: 3px;
      font-size: 18px;
      color: #00A0E9;
      line-height: 66px;
      text-align: center;
      cursor: pointer;
      margin-top: 42px;
    }
  }
`

// 提交订单
const ConfirmOrderWrap = styled.div `
  h2.confirm_order_title{
      font-size: 24px;
      line-height: 30px;
      font-weight: 400;
      color: #212121;
      margin-bottom:30px;
    }
    .consignee{
      margin-bottom: 80px;
      ul{
        width: 1050px;
        display: flex;
        padding-top: 10px;
        flex-wrap: wrap;
        justify-content: space-between;
        &::after{
          content: '';
          width: 30%;
          border:1px solid transparent;
        }
        li{
          width: 310px;
          height: 186px;
          border: 1px solid #EBEBEB;
          margin-bottom:20px;
          cursor: pointer;
          &.site_info{
            padding: 22px 22px 0 30px;
            position: relative;
            .basic_info{
              margin-bottom: 48px;
              span:nth-child(1){
                font-size: 14px;
                color: #212121;
                float: left;
                font-weight: 400;
              }
              span:nth-child(2){
                float: right;
                font-size: 12px;
                color: #707174;
              }
            }
            .address{
              font-size: 16px;
              font-weight: 400;
              color: #212121;
              line-height: 24px;
            }
            .select{
              position: absolute;
              bottom: 0;
              right: 0;
              width: 24px;
              height: 24px;
              background: url(${buy_spirit});
              background-position: -90px -740px;
            }
            &.active{
              border: 1px solid #3fd2f8;
              .select{
                background-position: -35px -740px;
              }
            }
          }
        }
        .ant-btn-primary{
          color: #212121;
          background: none;
          border: none; 
          width: 310px;
          height: 186px;
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .add_site{
          i{
            width: 43px;
            height: 43px;
            display:inline-block;
            background: url(${buy_spirit});
            background-position: -466px -181px;
            margin-bottom: 26px;
          }
        }
      }
    }
    .order{
      table{
        width: 1222px;
        margin-left: 8px;
        tr{
          text-align: center;
          height: 190px;
          border-bottom: 1px solid #F4F6FA;
          color:#212121;
          &.order_item{
            i{
              margin-right: 14px;
            }
            .order_item_info{
              height: 190px;
              display: flex;
              align-items:center;
              div:nth-child(1) {
                width: 90px;
                height: 123px;
                display: flex;
                align-items: center;
                box-shadow: 0px 1px 2px 1px rgba(39, 33, 92, 0.16);
                border-radius: 3px;
                justify-content: center;
                margin-right: 30px;
                img{
                  display: inline-block;
                  width: 54px;
                  height: 88px;
                }
              }
              div:nth-child(2){
                text-align: left;
                p:nth-child(1){
                  font-size: 18px;
                  color: #4F4F4F;
                  font-weight: 500;
                  line-height: 38px;
                }
                p:nth-child(2){
                  font-size: 14px;
                  color: #BFBFBF;
                  line-height: 26px;
                }
              }
            }
            .delivery{
              display: inline-block;
              width:100%;
              height: 38px;
              line-height: 38px;
              border-left: 1px solid #ccc
            }
          }
        }
        thead{
          tr:nth-of-type(1){
            height: 75px;
            border: none;
            background: #F4F6FA;
            th{
              width: 136px;
              font-size: 18px;
              color: #212121;
              font-weight: normal;
            }
            th:nth-of-type(1){
              width: 520px;
              text-align: left;
              text-indent: 36px;
            }
            th:nth-of-type(5) {
              width: 220px;
            }
          }
        }
        
        tfoot{
          tr{
            height: 84px; 
            border: none;
          }
          p{
            height: 84px; 
            line-height: 84px;
            text-align: right;
            span{
              color: #4FBAFA;
              margin-left: 26px;
              i{
                margin-right: 8px;
              }
            }
          }

        }
      }
    }
    .payment{
      .pay_list{
        .pay_item{
          display: flex;
          margin: 50px;
          h3{
            width: 200px;
            font-size: 24px;
            color:#212121;
            line-height: 34px;
          }
          .choose{
            display: flex;
            .radio_box{
              height: 40px;
              width: 40px;
              .item_radio{
                width: 16px;
                height: 16px;
                border-radius: 50%;
                background: url(${buy_spirit});
                background-position: -125px -246px;
                display: inline-block;
                vertical-align:middle;
                cursor: pointer;
                &.active{
                  background-position: -156px -245px;
                }
              }
              span{
                display: inline-block;
                vertical-align:middle;
                height:100%;
              }
            }
            ul{
              display: flex;
              width: 940px;
              flex-wrap:wrap;
              li{
                background: url(${buy_spirit});
                width: 125px;
                height: 40px;
                margin-right: 42px;
                margin-bottom: 30px;
                font-size: 0;
              }
            }
          }
          &.alipay{
            li:nth-of-type(1){
              background-position: -14px -307px;
            }
            li:nth-of-type(2){
              background-position: -198px -305px;
            }
          }
          &.wxpay{
            ul{
              li{
                background-position: -15px -462px;
              }
            }
          }
          &.bankpay{
            li:nth-of-type(1){
              background-position: -15px -551px;
            }
            li:nth-of-type(2){
              background-position: -184px -550px;
            }
            li:nth-of-type(3){
              background-position: -369px -549px;
            }
            li:nth-of-type(4){
              background-position: -548px -549px;
            }
            li:nth-of-type(5){
              background-position: -750px -548px;
            }
            li:nth-of-type(6){
              background-position: -16px -620px;
            }
            li:nth-of-type(7){
              background-position: -184px -620px;
            }
            li:nth-of-type(8){
              background-position: -369px -619px;
            }
            li:nth-of-type(9){
              background-position: -548px -619px;
            }
          }
        }
      }
    }
    .place_order{
      width: 100%;
      padding-right: 80px;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      div{
        width: 190px;
        font-size: 24px;
        line-height: 60px;
        span{
          color: #4FBAFA;
          i{
            font-size: 18px;
            margin-right: 4px;
          }
        }
      }
      .order_btn{
        height:55px;
        background-image: linear-gradient(to right,#2460E7, #49E5F9 );
        border-radius: 4px;
        text-align: center;
        line-height: 55px;
        color:#fff;
        cursor: pointer;
        font-size:18px;
      }
    }
`


export {
  OrderWrap,
  ConfirmOrderWrap,
  CompleteOrderWrap,
  NullCartWrap
}