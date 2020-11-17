import styled from 'styled-components'

import tagPic from '@a/images//shoppingCart.png'
import favimg from '@a/images/fav.png'
import favimg1 from '@a/images/shoppingCart.png'
import orderimg from '@a/images/order.png' 

const CartStyle = styled.div `
  margin: 0 auto;
  width: 1300px;
  height:100%;
  overflow:hidden;
`

const HeadStyle = styled.div `
  display:flex;
  font-size:14px;
  padding-left:23px;
  padding-top: 62px; 
  font-size: 14px;
  font-family: SourceHanSansCN;
  color: #80878A;
  span{
    margin:0 4px;
    height: 14px;
    font-size: 14px;
    line-height: 14px;
  }
  .title2{
    color: #3FD2F8;
  }
`

const BodyWarp = styled.div `

  display:flex;
  margin-top:12px;
  height: 685px;
  padding: 0  1px 115px 23px;
  .box2{
    flex:1;
    height:100%;
  }
  .box1{
    display:flex;
    flex-direction:column;
    width:183px;
    height:570px;
    padding-top:11px;
    background: #FAFAFC;
    .box-title{
      display:flex;
      width:100%;
      padding-left:33px;
      margin:21px 0;
      text-align:left;
      font-size:14px;
      .icon{
        background-image:url(${tagPic});
        background-repeat:no-repeat;
        margin-top:2px;
      }
      .box-card{
        margin-left:20px;
        p{
          margin:20px 0 0;
        }
      }
    }
  }
`

const ShoppingWarp = styled.div `
  display:flex;
  flex-direction:column;
  width:100%;
  height:685px;
  padding: 0 40px 0 50px;
  .tabTitle{
    display:flex;
    align-items:center;
    width:100%;
    height:46px;
    background: #FAFAFC;
    .tabicon{
      width:13px;
      height: 13px;
      background-image:url(${tagPic});
      background-repeat:no-repeat;
      background-position:-115px -58px;
      margin:0 11px 0 29px;
    }
    span{
      display:inline;
      height:10px;
      line-height:10px;
      font-size:10px;
      font-weight:bold;
      transform:scale(0.8);
      transform-origin:(0 0);
      color:#6A6A6A;
    }
  }
  .tabUl{
    width:100%;
    height: 474px;
  }
  .pagination{
    width:100%;
    display:flex;
    justify-content:center;
    margin-top:10px;
  }
  .dealWith{
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    height:46px;
    background: #FAFAFC;
    color: #6A6A6A;
    span:nth-child(1){
      margin-left:109px;
      font-size:12px;
      transform:scale(0.8);
      transform-origin:(0 0);
      font-weight:bold;
    }
    span:nth-child(2){
      margin-left:17px;
      font-size:12px;
      transform:scale(0.8);
      transform-origin:(0 0);
      font-weight:bold;
    }
    span:nth-child(3){
      margin-left:300px;
      font-size:12px;
      transform:scale(0.8);
      transform-origin:(0 0);
      font-weight:bold;
    }
    button{
      margin-left:10px;
      width: 99px;
      height: 31px;
      background: #2AB3FD;
      border-radius: 2px;
      border:0px;
      font-size: 10px;
      font-weight: 400;
      color: #FFFFFF;
      line-height: 31px;
      text-align:center;
    }
  }

`

const CartWarp = styled.div `
  padding: 0 40px 0 50px;
  width:100%;
  height:100%;
  .ant-table-thead > tr > th{
    padding:0;
    height:46px;
    color:#6A6A6A;
  }
  .ant-table-tbody > tr > td{
    padding:0;
  }
  .ant-table-thead > tr{
    background:#fafafa;
  }
  .ant-table-thead > tr > th{
    
    &:nth-child(2){
      padding-left:11px;
      font-size:12px;
      font-weight:bold;
      transform:scale(0.8);
      transform-origin:(0 0);
    }
    &:nth-child(3){
      padding-left:100px;
      font-size:12px;
      font-weight:bold;

    }
    &:nth-child(4){
      padding-left:12px;
      font-size:12px;
      font-weight:bold;
      transform:scale(0.8);
      transform-origin:(0 0);
    }
    &:nth-child(5){
      padding-left:65px;
      font-size:12px;
      font-weight:bold;
      transform:scale(0.8);
      transform-origin:(0 0);
    }
    &:nth-child(6){
      padding-left:75px;
      font-size:12px;
      font-weight:bold;
      transform:scale(0.8);
      transform-origin:(0 0);
    }
    &:nth-child(7){
      padding-left:60px;
      font-size:12px;
      font-weight:bold;
      transform:scale(0.8);
      transform-origin:(0 0);
    }
  }
  td:nth-child(1){
    padding-left:29px;
  }
  td:nth-child(2){
    padding-left:11px;
    display:flex;
  }
  img{
    margin:12px 0 10px 18px;
    width:56px;
    height:77px;
  }
  .description{
    display:flex;
    flex-direction:column;
    margin-left:25px;
    padding:33px 0;
    .productName{
      font-size: 16px;
      font-weight: bold;
      color: #535353;
      line-height: 16px;
      height:16px;
    }
    .producttitle{
      font-size: 12px;
      margin-top:auto;
      font-family: SourceHanSansCN;
      font-weight: bold;
      color: #D7D7D7;
      line-height: 16px;
    }
  }
  .price{
    margin:51px 0 0 22px;
    font-size: 12px;
    font-family: SourceHanSansCN;
    font-weight: bold;
    color: #BABABA;
    line-height: 16px;
  }
  .productPrice{
    display:flex;
    height:18px;
    margin-left:45px;
    button{
      width:18px;
      height: 18px;
      background:white;
      background-image:url(${tagPic});
      background-repeat:no-repeat;
      border-style: none;
    }
    input{
      width:37px;
      font-size:12px;
      text-align:center;
      border:1px solid #d9d9d9;

    }
  }   
  .total{
    display:flex;
    margin:0 0 0 80px;
    div{
      height:10px;
      width: 6px;
      background-image:url(${tagPic});
      background-repeat:no-repeat;
      background-position:-121px -84px;
      margin-right:2px;
    }
    p{
      line-height:12px;
      height:12px;
      transform:scale(0.83333);
      transform-origin:(0 0);
      color:#15A9EE;
    }
  }      
  .delete{
    margin:0 0 0 63px;
    width:10px;
    height:10px;
    background:white;
    background-image:url(${tagPic});
    background-position:-83px -153px;
    background-repeat:no-repeat;
    border-style: none;
  }  

  ul{
    margin-top:20px;
    display:flex;
    justify-content: center;
    
  }
  .dealWith{
    display:flex;
    align-items:center;
    width:100%;
    height:46px;
    background: #FAFAFC;
    color: #6A6A6A;
    span:nth-child(1){
      margin-left:109px;
      font-size:12px;
      transform:scale(0.8);
      transform-origin:(0 0);
      font-weight:bold;
    }
    span:nth-child(2){
      margin-left:17px;
      font-size:12px;
      transform:scale(0.8);
      transform-origin:(0 0);
      font-weight:bold;
    }
    span:nth-child(3){
      margin-left:300px;
      font-size:12px;
      transform:scale(0.8);
      transform-origin:(0 0);
      font-weight:bold;
    }
    button{
      margin-left:10px;
      width: 99px;
      height: 31px;
      background: #2AB3FD;
      border-radius: 2px;
      border:0px;
      font-size: 10px;
      font-weight: 400;
      color: #FFFFFF;
      line-height: 31px;
      text-align:center;
    }
  }
`

const Recommend = styled.div `
  width:183px;
  height:570px;
  padding:14px 9px 0 7px;
  background: #FAFAFC;  
  span{
    padding-left:11px;
    font-size: 14px;
    line-height:14px;
    text-align:center;
    font-weight: bold;
    color: #434343;
  }
  div:nth-child(2){
    margin: 31px 0 17px 0;
  }
  div{
    display:flex;
    flex-direction:column;
    justify-content:center;
    width: 166px;
    height: 224px;
    background:#fff;
    img{
      width:100%;
      height:160px;
    }
    .rmdName{
        width:100%;
        height: 12px;
        line-height:12px;
        font-size: 12px;
        font-weight: bold;
        color: #7E7E7E;
        text-align:center;
      }
    .rmdPrice{
      margin-top:11px;
      width: 100%;
      height: 12px;
      font-size: 12px;
      font-weight: bold;
      color: #FF4747;
      line-height: 12px;
      text-align:center;
    }
    .rmdInfo{
      display:flex;
      flex-direction:row;

      span{
        margin-top:8px;
        width:50%;
        height:12px;
        padding:0 11px;
        font-size: 12px;
        font-weight: bold;
        color: #A9B6C9;
        line-height: 12px;
        text-align:center;
        transform:scale(0.8);
        transform-origin:50% 0;
      }
    }
    .kob{
      width:2px;
      height:2px;
      border-left:1px solid #E7E7E7;
    }
  }
`

const FavoritesWarp = styled.div `
  width:100%;
  height:100%;
  padding: 0 40px 0 34px;
    .favoritesHeader{
      display:flex;
      flex-direction:row;
      margin-left:7px;
      .favoritesHleft{
      width:80px;
      height:40px;
      border-bottom: 1px solid #3FD2F8;
      span{
        display:block;
        line-height:16px;
        font-size:16px;
        text-align:center;
        margin: 7px 0 0 0;
        font-weight: bold;
        color: #3FD2F8;
      }
    }
    .favoritesHright{
      display:flex;
      align-items:center;
      justify-content:flex-end;
      flex:1;
      border-bottom: 1px solid #EAEAEA;
      .fav-btn{
        margin-right:5px;
        width: 76.8px;
        height: 30px;
        border: 1px solid #B5B5B5;
        border-radius: 5px;
        font-size: 12px;
        color: #6A6A6A;
        background:#fff;
        transform:scale(0.83);
        transform-origin:left;
        &:hover{
          color:#3FD2F8;
          border:1px solid #3FD2F8;
          box-shadow:0px 0px 1px #3FD2F8;
        }

      }
      .ant-input-sm{
        font-size:12px;
      }
      .ant-input-affix-wrapper:not(:last-child){
        height:25px;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
        
      }
      .ant-input-search-button:not(.ant-btn-primary){
        height:25px;
        border-top-right-radius:4px;
        border-bottom-right-radius:4px;
      }
      .fav-operating{
        display:flex;
        align-items:center;
        .fav-box{
          display:flex;
          align-items:center;
          margin-left:21px;
          .fav-icon1{
            width:14px;
            height:14px;
            background:url(${favimg1}) no-repeat;
          }
          .fav-icon{
            width:14px;
            height:14px;
            background:url(${favimg}) no-repeat;
          }
        }
        span{
          font-size:20px;
          transform:scale(0.5);
          transform-origin:left;
        }
        button{
          margin-left:23px;
        }
      }
    } 
  }
  .fav-body{
    .favB-header{
      margin:33px 0 30px 4px;
      width:836px;
      height: 39px;
      display:flex;
      align-items:center;
      background:#FAFAFC;
      span{
        font-size:12px;
        margin: 0 30px 0 19px;
      }
    }
    .fav-list{
      display:flex;
      height:458px;
      flex-wrap:wrap;
      li{
        position: relative;
        width:143px;
        height: 196px;
        border:4px solid #F7F7F7;
        border-radius:5px;
        margin-bottom:10px;
        display:flex;
        flex-direction:column;
        margin:0 12px;
        span{
          display:flex;
          align-items:center;
          justify-content:center;
          font-size:12px;
          height:12px;
        }
        .favimg{
          display:flex;
          justify-content:center;
          align-items:center;
          height:142px;
          img{
            width:60px;
            height:80px;
          }
        }
        .fav-name{
          height: 12px;
          font-size: 12px;
          font-weight: bold;
          color: #4F4F4F;
          line-height: 12px;
        }
        .fav-price{
          margin-top:10px;
          color:#3FD2F8;
          height: 12px;
          font-size: 12px;
          font-weight: bold;
          color: #3FD2F8;
          line-height: 12px;
        }
        .li-chBox1{
          position:absolute;
          right:-4px;
          top:-4px;
          border-radius: 3px; 
          width:30px;
          height:30px;
          background:url(${favimg}) no-repeat;
          background-position:-15px -48px;
          z-index:2
        }
        .li-chBox2{
          display:none;
          position:absolute;
          right:-4px;
          top:-4px;
          border-radius: 3px; 
          width:30px;
          height:30px;
          background:url(${favimg}) no-repeat;
          background-position:-60px -48px;
        }
        &:hover{
          background: #e8e8e8;
          border:4px solid #e2e2e2;
          .li-chBox2{
            display:block;
          }
        }
      }
      .lis-items-checked{
        z-index:2;
        border:4px solid #c0d3e8;
        background: #e8e8e8;
      }
    }
    .ant-pagination{
      display:flex;
      justify-content:center;
    }
  }
`

const OrderWarp = styled.div `
  width:100%;
  height:100%;
  padding: 0 40px 0 30px;
  .orderHeader{
    width:100%;
    height:39px;
    display:flex;
    align-items:center;
    border-bottom:1px solid #EAEAEA;
    margin-bottom:33px;
    span{
      width:80px;
      height:39px;
      color: #515151;
      line-height:39px;
      text-align:center;
      font-size:16px;
      font-weight:bold;
      &:hover{
        color:#3FD2F8;
        border-bottom:1px solid #3FD2F8;
      }
    }
    div{
      width:1px;
      height:13px;
      margin:0 17px 0 ;
      border-left:1px solid #E8E8E8;
    }
  }
  .orderBody{
    height:100%;
    width:100%;
    padding-left:4px;
    .orderTitle{
      width:100%;
      height: 39px;
      font-size:14px;
      color:#6E6E6E;
      display:flex;
      align-items:center;
      background: #FAFAFC;
      span:nth-child(1){
        margin-left:28px;
      }
      span:nth-child(2){
        margin-left:267px;
      }
      span:nth-child(3){
        margin-left:170px;
      }
      span:nth-child(4){
        margin-left:155px;
      }
    }
    ul{
      width:100%;
      height:100%;
    }
    .order{
      border-bottom:1px solid #F4F4F4;
      .orderItems{
        height:116px;
        display:flex;
        align-items:center;
        .orderInfo{
          display:flex;
          align-items:center;
          width:230px;
          height:100%;
          img{
            width:60px;
            height: 80px;
          }
          .itemInfo{
            width: 135px;
            height: 80px;
            margin-left:34px;
            align-items:center;
            .itemName{
              margin-top:23px;
              width:100%;
              height:16px;
              line-height:16px;
              font-size:16px;
              font-weight: bold;
              color: #6E6E6E;
              overflow:hidden; //超出的文本隐藏
              text-overflow:ellipsis; //溢出用省略号显示
              white-space:nowrap; //溢出不换行
            }
            .itemTitle{
              width:100%;
              height:14px;
              line-height:14px;
              font-size:14px;
              margin-top:16px;
              font-weight: bold;
              color: #C0C0C0;
              overflow:hidden; //超出的文本隐藏
              text-overflow:ellipsis; //溢出用省略号显示
              white-space:nowrap; //溢出不换行
            }
          }
        }
        .itemDetail{
          width:225px;
          height: 80px;
          margin-left:53px;
          .itemAdr{
            width:100%;
            height:12px;
            margin-bottom:9px;
            line-height:12px;
            font-size:12px;
            font-weight: bold;
            color: #555454;
            overflow:hidden; //超出的文本隐藏
            text-overflow:ellipsis; //溢出用省略号显示
            white-space:nowrap; //溢出不换行
          }
          .itemUser{
            width:250px;
            height:12px;
            margin-bottom:9px;
            line-height:12px;
            font-size:12px;
            font-weight: bold;
            color: #555454;
            font-weight: bold;
            color: #555454;
          }
          .itemId{
            width: 100%;
            margin-bottom:9px;
            height: 12px;
            font-size: 12px;
            font-weight: bold;
            color: #B7B7B7;
            line-height: 12px;
            overflow:hidden; //超出的文本隐藏
            text-overflow:ellipsis; //溢出用省略号显示
            white-space:nowrap; //溢出不换行
          }
          .itemDate{
            width: 100%;
            height: 12px;
            font-size: 12px;
            font-weight: bold;
            color: #B7B7B7;
            line-height: 12px;
          }
        }
        .itemPrice{
          display:flex;
          margin-left:53px;
          height:16px;
          font-size:16px;
          font-weight: bold;
          color: #6E6E6E;
          text-align:center;
          p{
            width:60px;
          }
          span{
            margin-left:20px;
            color: #9F9F9F;
          }
        }
        .orderState{
          display:flex;
          margin-left:32px;
          width:152px;
          .cancelOrder{
            width: 76px;
            height: 32px;
            border: 1px solid #E7E7E7;
            border-radius: 3px;
            line-height:32px;
            text-align:center;
            color:#9F9F9F;
            font-size:14px;
            transition: all 0.5s ease-out;
            &:hover{
              box-shadow:0px 0px 5px #000;
              transition: all 0.5s ease-out;
            }
          }
          .payment{
            margin-left:6px;
            font-size: 14px;
            font-weight: bold;
            color: #3FD2F8;
            line-height: 32px;
            text-align:center;
            width: 62px;
            height: 32px;
            border: 1px solid #3FD2F8;
            border-radius: 3px;
            transition: all 0.5s ease-out;
            &:hover{
              box-shadow:0px 0px 5px #3FD2F8;
              transition: all 0.5s ease-out;
            }
          }
          .ordertip{
            color:#3FD2F8;
            font-size:14px;
            padding-left: 46px;
          }
          .paid{
            background:#dcf8ff;
            color:#3FD2F8;
            width:90px;
            height:30px;
            font-size:14px;
            border-radius: 3px;
            line-height:30px;
            text-align:center;
            border:1px solid #3fd2f8;
            margin-left:30px;
          }
        }
      }
    }
  }
`

const List = styled.li`
  width:100%;
  height:110px;
  border-bottom:1px solid #F6F6F6;
  display:flex;
  padding-left:6px;
  &:hover{
    background:#F6F6F6
  }
  .tabicon{
    width:13px;
    height: 13px;
    background-image:url(${tagPic});
    background-repeat:no-repeat;
    background-position:-115px -58px;
    margin:51px 0 0 23px ;
  }
  img{
    margin:19px 0 0 18px;
    width:56px;
    height:77px;
  }
  .description{
    display:flex;
    width:240px;
    flex-direction:column;
    margin-left:25px;
    padding:33px 0;
    .productName{
      font-size: 16px;
      font-weight: bold;
      color: #535353;
      line-height: 16px;
      height:16px;
    }
    .producttitle{
      font-size: 12px;
      font-family: SourceHanSansCN;
      font-weight: bold;
      color: #D7D7D7;
      line-height: 16px;
    }
  }
  .price{
    width:60px;
    margin:51px 0 0 10px;
    font-size: 12px;
    font-family: SourceHanSansCN;
    font-weight: bold;
    color: #BABABA;
    line-height: 16px;
  }
  .productPrice{
    width:100px;
    display:flex;
    height:18px;
    margin-left:45px;
    margin-top:50px;
    button{
      width:18px;
      height: 18px;
      background:white;
      background-image:url(${tagPic});
      background-repeat:no-repeat;
      border-style: none;
    }
    input{
      width:37px;
      font-size:12px;
      text-align:center;
      border:0px solid #FAFAFC;
      border-left:0;
      border-right:0;

    }
  }
  .total{
    width:60px;
    display:flex;
    margin:54px 0 0 27px;
    div{
      height:10px;
      width: 6px;
      background-image:url(${tagPic});
      background-repeat:no-repeat;
      background-position:-121px -84px;
      margin-right:2px;
    }
    p{
      line-height:12px;
      height:12px;
      transform:scale(0.83333);
      transform-origin:(0 0);
      color:#15A9EE;
    }
  }
  .delete{
    margin:52px 0 0 58px;
    width:10px;
    height:10px;
    background:white;
    background-image:url(${tagPic});
    background-position:-83px -153px;
    background-repeat:no-repeat;
    border-style: none;
  }
`

const CommonWarp = styled.div`
  width:100%;
  height:100%;
  padding:0 117px 0 80px;
  .commontitle{
    height:18px;
    line-height:18px;
    font-size: 18px;
    font-weight: bold;
    color: #363636;
  }
  .commonBody{
    width:100%;
    height:100%;
    padding-top:28px;
    display:flex;
    .commonLeft{
      width:120px;
      height:163px;
      display:flex;
      justify-content:center;
      align-items:center;
      border-radius: 4px;
      background: #E8E8E8;
      img{
        width:100%;
        height:100%;
      }
    }
    .commonRight{
      margin-left:30px;
      width:550px;
      height:100%;
      .score{
        display:flex;

        .scoregood{
          display:flex;
          align-items:center;
          margin-right:60px;
          div{
            width: 27px;
            height: 27px;
            margin-right:20px;
            background:url(${orderimg}) no-repeat;
            background-position:-152px -260px;
          }
          span{
            height:14px;
            line-height:14px;
            color: #828282; 
          }
        }
        .scoremedium{
          display:flex;
          align-items:center;
          margin-right:60px;
          div{
            width: 27px;
            height: 27px;
            margin-right:20px;
            background:url(${orderimg}) no-repeat;
            background-position:-207px -260px;
          }
          span{
            height:14px;
            line-height:14px;
            color: #828282; 
          }
        }
        .scorenegative{
          display:flex;
          align-items:center;
          margin-right:60px;
          div{
            width: 27px;
            height: 27px;
            margin-right:20px;
            background:url(${orderimg}) no-repeat;
            background-position:-207px -298px;
          }
          span{
            height:14px;
            line-height:14px;
            color: #828282; 
          }
        }
      }
      .commonText{
        margin-top:20px;
        height:116px;
        width:100%;
        .comments{
          overflow:hidden;
          resize:none;
          width:100%;
          height:100%;
          padding:13px 0 0 18px;
          font-size: 14px;
          font-weight: bold;
          color: #BCBBBB;
          border: 1px solid #DDDDDD;
        }
      }
    }
  }

` 



export {
  CartStyle,
  HeadStyle,
  BodyWarp,
  ShoppingWarp,
  CartWarp,
  Recommend,
  OrderWarp,
  FavoritesWarp,
  List,
  CommonWarp
}