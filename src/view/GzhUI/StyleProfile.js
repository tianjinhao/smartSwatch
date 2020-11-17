import styled from 'styled-components'

const ChangeProfileImg = styled.div`
    margin-left:43px;
    p{
      font-size: 18px;
      font-family: SourceHanSansCN;
      font-weight: 400;
      color: #838383;
    }
    .myPhoto{
      margin-top:17px;
      width: 101px;
      height: 101px;
      background: #D9D9D9;
      margin-bottom:39px;
    }
    .setImg{
      font-size: 18px;
      font-family: SourceHanSansCN;
      font-weight: 400;
      color: #838383;
    }
    .setFile{
      font-size: 14px;
      font-family: SourceHanSansCN;
      font-weight: 400;
      color: #838383;
      margin-left:474px;
    }
    .border-img{
      margin-top:9px;
      width: 825px;
      height: 1px;
      background: #838383;
      border: 1px solid #E6E6E6;
      margin-bottom:24px;
    }
    .img-contain{
      margin-top:20px;
      width:290px;
      height:290px;
      border:1px solid black;
      img{
        width:100%;
        height:100%;
      }
    }
    .btn{
      display:flex;
      margin-top:20px;
      span{
        text-align:center;
        border-radius:5px;
        display:block;
        font-size: 18px;
        font-family: SourceHanSansCN;
        font-weight: 400;
        color: #FFFFFF;
        width:132px;
        height:48px;
        line-height:48px;
      }
      span:first-child{     
        background:rgb(42,179,253);         
        margin-right:22px;
      }
      span:last-child{      
        background:rgb(217,217,217);
      }
    }

`

export {
  ChangeProfileImg
}