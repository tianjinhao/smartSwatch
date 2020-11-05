import styled from 'styled-components'
import img from '@a/images/bottom/shop.png'
const ListMain=styled.div`
  width:1300px;
  margin:0 auto;
  background:skyblue;
`
const ShopContain = styled.div`
  width:1300px;
  margin:0 auto;
  
`
const FirstEl = styled.div`
  margin-top:63px;
  padding-bottom:20px;
  border-bottom:3px solid #F1F1F1;
  span{
    font-size:16px;
    color:#595959;
    line-height:16px;
    margin-right:8px
  }
  span:last-child{
    margin-left:8px
  }
`
const TwoEl = styled.div`
  height:55px;
  border-bottom:3px solid #F1F1F1;
  display:flex;
  align-items:center;
  .classify{
    font-size:16px;
    color:#595959;
    margin:16px 0 16px
  }
  span{
    font-size:16px;
    margin-left:50px;
    color:#626262;
    margin-right:27px;
  }
`
const ThreeEl = styled.div`
  height:52px;
  display:flex;
  align-items:center;
  position: relative;
  z-index:16;
  .classify{
    font-size:16px;
    color:#595959;
    margin:16px 0 16px
  }
  span{
    font-size:16px;
    margin-left:46px;
    color:#626262;
    margin-right:27px;
    display:flex;
    align-items:center;
    h2{
      width:14px;
      border: 1px solid #E8E8E8;
      line-height:18px;
      height:20px;
      border-right:0;
      font-size: 13px;
      font-family: SourceHanSansCN;
      font-weight: 400;
      color: #595959;
    }
    input{
      width: 32px;
      height: 20px;
      border: 1px solid #E8E8E8;
      border-left:0;
    }
  }
  span:last-child{
      margin-left:600px;
  }
  .firstPage{  
    font-size: 16px;
    font-family: SourceHanSansCN;
    font-weight: 400;
    color: #FF3737;
    margin-left:16px;
  }
  .lastPage{    
    font-size: 16px;
    font-family: SourceHanSansCN;
    font-weight: 400;
    color: #5D5D5D;
    margin-right:15px;
  }
`
const List = styled.div`
  margin-top:79px;
  ul{
    display:flex;
    flex-wrap:wrap;
    justify-content: space-between;
    li{
      width: 275px;
      height: 377px;
      background: #FFFFFF;
      border-radius: 9px 9px 9px 9px;
      border:7px solid #F7F7F7;
      display:flex;
      flex-direction:column;
      align-items:center;
      margin-bottom:64px;
      img{
        margin:31px 80px 41px 79px;
      }
      h1{
        font-size: 16px;
        font-family: SourceHanSansCN;
        font-weight: bold;
        color: #4F4F4F;
        line-height: 16px;
      }
      h2{
        font-size: 12px;
        font-family: SourceHanSansCN;
        font-weight: bold;
        color: #BFBFBF;
        line-height: 16px;
        margin-top:5px;
      }
      h3{  
      font-size: 18px;
      font-family: SourceHanSansCN;
      font-weight: bold;
      color: #FB1429;
      line-height: 16px;
      margin-top:15px;
      }
      p{
        width: 132px;
        height: 38px;
        background: url(${img}) no-repeat -37px -223px;
        margin-top:15px;
        cursor:pointer;
      }
    }
    li:hover{
      border:7px solid #C5E1FF;
    }
  }
`

export {
  ListMain,
  ShopContain,
  FirstEl,
  TwoEl,
  ThreeEl,
  List
}