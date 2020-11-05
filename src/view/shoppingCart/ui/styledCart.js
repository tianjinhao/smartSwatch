import styled from 'styled-components'

import tagPic from '@a/images//shoppingCart.png'
import favimg from '@a/images/fav.png'
import favimg1 from '@a/images/shoppingCart.png'
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
    height:685px;
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
    margin-left:6px;
    li{
      width:100%;
      height:110px;
      border-bottom:1px solid #F6F6F6;
      display:flex;
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
        margin:51px 0 0 112px;
        font-size: 12px;
        font-family: SourceHanSansCN;
        font-weight: bold;
        color: #BABABA;
        line-height: 16px;
      }
      .productPrice{
        display:flex;
        height:18px;
        margin-left:65px;
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
        display:flex;
        margin:54px 0 0 57px;
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
        margin:52px 0 0 88px;
        width:10px;
        height:10px;
        background:white;
        background-image:url(${tagPic});
        background-position:-83px -153px;
        background-repeat:no-repeat;
        border-style: none;
      }
    }
  }
  .pagination{
    flex:1;
    width:100%;
    background:black;
  }


`

const CartWarp = styled.div `
  padding: 0 40px 0 50px;
  width:100%;
  height:100%;
  .ant-table-thead > tr > th{
    padding:0;
  }
  .ant-table-tbody > tr > td{
    padding:0;
  }
  .ant-table-thead > tr{
    background:#fafafa;
  }
  th{
    height:46px;
    color:#6A6A6A;
  }
  th:nth-child(1){
    padding-left:29px;
  }
  th:nth-child(2){
    padding-left:11px;
    padding-right:300px;
    font-size:12px;
    font-weight:bold;
    transform:scale(0.8);
    transform-origin:(0 0);
  }
  th:nth-child(3){
    padding-left:12px;
    font-size:12px;
    font-weight:bold;
    transform:scale(0.8);
    transform-origin:(0 0);
  }
  th:nth-child(4){
    padding-left:65px;
    font-size:12px;
    font-weight:bold;
    transform:scale(0.8);
    transform-origin:(0 0);
  }
  th:nth-child(5){
    padding-left:75px;
    font-size:12px;
    font-weight:bold;
    transform:scale(0.8);
    transform-origin:(0 0);
  }
  th:nth-child(6){
    padding-left:60px;
    font-size:12px;
    font-weight:bold;
    transform:scale(0.8);
    transform-origin:(0 0);
  }
  td:nth-child(1){
    padding-left:29px;
  }
  td:nth-child(2){
    padding-left:11px;
    display:flex;
  }
  img{
    margin:12px 0 0 18px;
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
      justify-content:space-between;
      li{
        position: relative;
        width:143px;
        height: 196px;
        border:4px solid #F7F7F7;
        border-radius:5px;
        margin-bottom:10px;
        display:flex;
        flex-direction:column;
        img{
          width:100%;
          height:142px;
        }
        span{
          display:flex;
          align-items:center;
          justify-content:center;
          font-size:12px;
          height:12px;
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
      border:1px solid #E8E8E8;
    }
  }

  .ant-table-tbody > tr > td{
    padding:0;
    
  }
  .ant-table-thead > tr{
    background:#fafafa;
    margin:33px 0 0 32px;;
  }
  .ant-table{
    height:500px;
  }
  th{
    height:46px;
    color:#6A6A6A;
    font-size:13px;
  }
  th:nth-child(1){
    padding-left:28px;
    width:234px;
    font-size: 14px;
    font-weight: bold;
    color: #6E6E6E;
    line-height:14px;
  }
  th:nth-child(2){
    width: 226px;
    font-size: 14px;
    font-weight: bold;
    color: #6E6E6E;
    line-height: 14px;
    text-align:center;
  }
  th:nth-child(3){
    width:150px;
    font-size: 14px;
    font-weight: bold;
    color: #6E6E6E;
    line-height: 14px;
    text-align:center;
  }
  th:nth-child(4){
    width:150px;
    font-size: 14px;
    font-weight: bold;
    color: #6E6E6E;
    line-height: 14px;
    text-align:center;
  }

  tbody tr{
    height:100px;
  }
  .logbox{
    width:234px;
    display:flex;
    img{
      width:60px;
      height:80px;
    }
    .description{
      display:flex;
      flex-direction:column;
      padding:23px 0 11px;
      margin-left:23px;
      .productName{
        font-size: 16px;
        font-weight: bold;
        line-height:16px;
        color: #6E6E6E;
      }
      .producttitle{
        font-size: 14px;
        font-weight: bold;
        color: #C0C0C0;
        line-height: 14px;
        margin:auto;
      }
    }
  }
  .detailsMenuItem{
    display:flex;
    flex-direction:column;
    font-size:12px;
    span{
      margin-left:10px;
      width:226px;
    }
    span:nth-child(1){
      font-weight: bold;
      color: #555454;
    }
    span:nth-child(2){
      font-weight: bold;
      color: #555454;
    }
    span:nth-child(3){
      font-weight: bold;
      color: #B7B7B7;
    }
    span:nth-child(4){
      font-weight: bold;
      color: #B7B7B7;
    }
  }
  td:nth-child(3){
    text-align:center;
  }
  .itemStatus{
    display:flex;
    justify-content:center;
    align-items:center;
    span{
      margin-right:6px;
    }
  }
  .ant-table-pagination{
    display:flex;
    justify-content:center;
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
  FavoritesWarp
}