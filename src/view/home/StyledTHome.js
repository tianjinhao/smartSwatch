import styled from 'styled-components'

import faqBg from '@a/images/home/faq-bg.jpg'


const THomeWrap = styled.div `
  background: #F4F4F4;


`



const HotSaleWrap = styled.div `

`

const NewZoneWrap = styled.div `
  width: 100%;
  height: 660px;
  background-image: linear-gradient(to right,#2460E7, #49E5F9 );
  .el-carousel{
    height: 100%;
    .el-carousel__container{
      height: 100%;
      .el-carousel__arrow{
        width: 100px;
        height: 100px;
        .el-icon-arrow-left,.el-icon-arrow-right {
          font-size: 20px;
        }
      }
      .new_list{
        height: 100%;
        width: 1300px;
        margin: 0 auto;
        padding: 0 46px;
        ul{
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: space-around;
        }
      }
    }
  }
`

const PartsWrap = styled.div `
  width: 100%;
  height: 820px;
  margin-top: 60px;
  .parts{
    width: 1300px;
    height: 100%;
    margin: 0 auto;
    padding: 0 45px;
    
    .parts_left{
      width: 370px;
      height: 820px;
      background: #363B4F;
      box-shadow: 0px 0px 30px 5px rgba(69, 66, 95, 0.25), 0px 61px 59px 0px rgba(88, 88, 88, 0.21);
      border-radius: 10px;
      position: relative;
      overflow: hidden;
      float: left;
      margin-right: 20px;
      /* >div{
        width: 370px;
        height: 410px;
      }
      .presell_info{

      }
      .presell_bg{
        background: linear-gradient(139deg, #4742FC, #26BBFF, #26BBFF);
        border-radius: 0 0 10px 10px;
      } */
      img{
        width: 100%;
        height: 100%;
      }
    }
    .parts_right{
      width: 820px;
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-content: space-between;
      float: left;
      li{
        width: 400px;
        height: 400px;
        background: #fff;
        border-radius: 10px;
        cursor: pointer;
        .parts_img{
          height: 284px;
          width: 100%;
          position: relative;
          img{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        }
        .parts_info{
          text-align: center;
          p:nth-child(1){
            line-height: 30px;
          }
          p:nth-child(2){
            line-height: 30px;
            font-size: 14px;
            color: #BFBFBF;
            margin-bottom: 16px;
          }
          p:nth-child(3){
            height: 16px;
            line-height: 16px;
            font-size: 18px;
            font-weight: bold;
            color: #FB1429;
          }
        }
      }
    }

  }
`

const VideoZoneWrap = styled.div `
  width: 100%;
  height: 1070px;
  .video_zone{
    width: 1300px;
    height: 100%;
    margin: 0 auto;
    padding: 0 46px 0 50px;
    overflow: hidden;
    .to_us{
      text-align: center;
      line-height: 30px;
      img{
        margin-left: 8px;
        position: relative;
        top: -1px;
      }
    }
    .video_con{
      height: 1040px;
      display:flex;
      flex-direction: column;
      padding: 100px 0;
      justify-content: space-between;
      .video_con_item{
        height: 370px;
        overflow: hidden;
        display: flex;
        justify-content: space-between;
        &:nth-child(2){
          flex-direction: row-reverse;
          .video_text{
            align-items: flex-end;
            p{
              text-align: right;
              &:nth-child(1){
                span:nth-child(1){
                  font-size: 36px;
                  font-weight: normal;
                }
                span:nth-child(2){
                  font-size: 40px;
                  font-weight: bold;
                }
              }
            }
          }
        }
      }
    }
  }
`

const VideoWrap = styled.div `
  width: 600px;
  height: 370px;
  background: #fff;
  border-radius: 5px;
  overflow: hidden;
  video{
    width: 100%;
    height: 100%;
    border: none;
    outline:none;
  }
`

const VideoTextWrap = styled.div `
  width: 600px;
  height: 370px;
  display: flex;
  flex-direction: column;
  p{
    span{
      display: block;
    }
    &:nth-child(1){
      line-height:60px;
      margin-top: 50px;
      span:nth-child(1){
        font-size: 40px;
        font-weight: bold;
      }
      span:nth-child(2){
        font-size: 36px;
      }
    }
    &:nth-child(2){
      font-size: 14px;
      font-weight: 400;
      color: #8ECEE0;
      line-height: 20px;
      margin: 26px 0 10px;
    }
    &:nth-child(3){
      font-size: 18px;
      font-weight: 300;
      color: #373737;
      line-height: 24px;
    }
  }
  .video_btn{
    width: 190px;
    height: 55px;
    background: linear-gradient(-90deg, #49E5F9, #2460E7);
    border-radius: 3px;
    color: #fff;
    border: none;
    cursor: pointer;
    margin-top:26px;
  }
`

const BraceletWrap = styled.div `
  width: 100%;
  height: 750px;
  background:url(${faqBg})  center top no-repeat; 
  background-size: 1920px 100%;
  .bracelet{
    width: 1300px;
    height: 100%;
    margin: 0 auto;
    overflow: hidden;
    padding: 0 46px;
    .bracelet_header{
      text-align: center;
      height: 120px;
      h2{
        text-align: center;
        line-height: 60px;
        margin: 100px 0 10px;
        font-size: 36px;
      }
      span{
        font-size: 18px;
        font-weight: 400;
        color: #989898;
        line-height: 0px;
      }
    }
  }
`

export {
  THomeWrap,
  HotSaleWrap,
  NewZoneWrap,
  PartsWrap,
  VideoZoneWrap,
  VideoWrap,
  VideoTextWrap,
  BraceletWrap,
}