import styled from 'styled-components'
import img from '@a/images/bottom/shop.png'
const Bot = styled.div`
  width: 100%;
  height: 281px;
  /* background: #363B4F; */
  background:#363B4F;
  margin-top:97px;
  
  div{
    width:1300px;
    height:281px;
    margin:0 auto;
    position: relative;
    //电话部分
    .phone{
      width:200px;
      height:95px;
      display:flex;
      flex-direction:column;
      align-items:center;
      position: absolute;
      top:62px;
      left:63px;
      li{
        font-size: 12px;
        line-height:12px;
        font-family: SourceHanSansCN;
        font-weight: bold;
        color: #7D7D7D;
        margin-bottom:11px;
      }
      li:first-child{
        font-size: 28px;
        line-height:28px;
        font-family: SourceHanSansCN;
        font-weight: bold;
        color: #FFFFFF;
        margin-bottom:15px;
      }
      .phone-line{
        display:flex;
        margin-bottom:16px;
        p:first-child{
          width: 80px;
          height: 2px;
          background: #EEEEEE;
        }
        p:last-child{
          width: 109px;
          height: 2px;
          background: #8F8F90;
        }
      }
    }
    //订单部分 服务支持  关于我们
    .order{
      width:52px;
      height:98px;
      position: absolute;
      top:60px;
      left:715px;
      display:flex;
      flex-direction:column;
      align-items:center;
      li{
        font-size: 12px;
        line-height:12px;
        font-family: SourceHanSansCN;
        font-weight: bold;
        color: #7D7D7D;
        display:flex;
        cursor:pointer;
        margin-bottom:12px;
        p:first-child{
          width: 21px;
          height: 1px;
          background: #EEEEEE;
        }
        P:last-child{
          width: 25px;
          height: 1px;
          background: #8F8F90;
        }
      }
      .order-line{
          margin-bottom:10px;
          cursor:default;
      }
      li:first-child{
        font-size: 12px;
        font-family: SourceHanSansCN;
        font-weight: bold;
        color: #F3F7F8;
        margin-bottom:12px;
        cursor:default;
      }
    }
    .support{
      left:848px;
    }
    .about{
      left:997px
    }
    //关于我们
    .attention{
      width:126px;
      height:100px;
      position: absolute;
      top:59px;
      left:1134px;
      display:flex;
      flex-direction:column;
      align-items:center;
      text-align:center;
      li{
        font-size: 12px;
        font-weight:12px;
        font-family: SourceHanSansCN;
        font-weight: 500;
        color: #FFFFFF;
        display:flex;
        cursor:pointer;
        p:first-child{
          width: 15px;
          height: 1px;
          background: #EEEEEE;
        }
        p:last-child{
          width: 101px;
          height: 1px;
          background: #8F8F90;
        }
        span{
          background: url(${img}) no-repeat -529px -48px;
          width: 55px;
          height: 55px;
        }
        span:last-child{
          margin-left:6px;
        }
      }
      .attention-line{
        margin-top:10px;
        margin-bottom:19px
      }
    }
    div{
      width: 1212px;
      height: 1px;
      background: #58585B;
      position: absolute;
      top:199px;
      left:56px;
    }
    .introduction{
      position: absolute;
      top:233px;
      left:62px;  
      font-size: 12px;
      font-family: SourceHanSansCN;
      font-weight: bold;
      color: #80878A;
    }
  }
  li{
    a{
      color:#7D7D7D;
    }
  }
`

export {
  Bot
}