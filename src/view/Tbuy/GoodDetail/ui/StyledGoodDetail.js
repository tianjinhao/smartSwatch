import styled from 'styled-components'

import buy_spirit from '@a/images/buy/立即购买-精灵图.png'

//  购买首页
const GoodDetailWrap = styled.div `
  width: 100%;
  .good_detail{
    width: 1300px;
    min-height: 800px;
    background-color: #fff;
    margin: 0 auto;
    padding-top: 50px;
    .good_detail_show{
      height: 650px;
      width: 100%;
      display:flex;
      justify-content: space-between;
      .good_detail_show_left{
        padding-left: 70px;
        width: 400px;
        height: 100%;
        .good_img {
          border: 1px solid #e5e5e5;
          width: 316px;
          height: 434px;
          border-radius: 8px;
          text-align: center;
          margin-bottom: 10px;
          img{
            width: 80%;
            display: inline-block;
            vertical-align: middle;
            &+span{
              display: inline-block;
              height: 100%;
              vertical-align: middle;
            }
          }
        }
        .buy_collect{
          text-align: center;
          p{
            width: 30px;
            height: 30px;
            background: url(${buy_spirit});
            background-position: -17px -25px;
            cursor: pointer;
            &.collect{
              background-position: -62px -25px;
            }
          }
          span{
            font-size: 14px;
            line-height: 28px;
          }
        }
      }
      .good_detail_show_right{
        width: 630px;
        padding-left: 4px;
        .good_name{
          font-size: 26px;
          line-height: 40px;
          color: #464646;
        }
        .good_info{
          font-size: 12px;
          color:#BFBFBF;
          line-height: 20px;
        }
        .good_price{
          width: 570px;
          height: 75px;
          background: url(${buy_spirit}) no-repeat;
          background-position: -11px -83px;
          line-height: 75px;
          font-size: 20px;
          color: #464646;
          padding-left: 16px;
          margin: 16px 0 20px;
          span{
            color: #2AB3FD;
            font-weight: bold;
            font-size: 30px;
            padding-left: 40px;
            i{
              padding: 0 2px;
              font-size: 18px;
            }
          }
        }
        .good_options{
          .bar{
            padding: 5px 0;
            hr{
              color: #BFBFBF;
              border-style:dashed;
            }
          }
          .option_name{
            color: #464646;
            margin-right: 20px;
          }
          .good_options_item{
            line-height: 36px;
            &.good_carriage{
              .pinkage{
                font-size: 16px;
                font-weight: 500;
                color: #2AB3FD;
                line-height: 0px;
                padding: 0 24px;
              }
              .store{
                height: 24px;
                border: 1px solid #F7F7F7;
                border-radius: 1px;
                font-size: 14px;
                font-weight: 400;
                padding: 4px 14px 5px;
                color: #2AB3FD;
              }
            }
            &.good_support{
              div{
                display: inline-flex;
                width: 420px;
                font-size: 12px;
                flex-wrap:wrap;
                span{
                  margin-right: 20px;
                  i{
                    display: inline-block;
                    width: 17px;
                    height: 16px;
                    background: url(${buy_spirit});
                    background-position: -107px -39px;
                    position: relative;
                    top: 2px;
                    margin-right: 10px;
                  }
                  
                }
              }
            }
            &.good_version{
              margin-bottom: 60px;
              ul{
                width: 390px;
                display: inline-flex;
                flex-wrap: wrap;
                justify-content: space-between;
                li{
                  width: 174px;
                  height: 40px;
                  border: 1px solid #E6E6E6;
                  margin-bottom: 12px;
                  text-align: center;
                  color: #464646;
                  cursor: pointer;
                  &:hover{
                    border-color: #2AB3FD;
                  }
                }

              }
            }
            &.good_num{
              height: 40px;
              line-height: 40px;
              .option_name{
                /* display: inline-block;
                line-height: 0px; */
              }
               div{
                 display: inline-flex;
                 width: 84px;
                 height: 40px;
                 border: 1px solid #eeeeee;
                 background-color: #eeeeee;
                 overflow: hidden;
                 justify-content: space-between;
                 span{
                   display:inline-block;
                   width: 22px;
                   background-color: #eeeeee;
                   text-align: center;
                   cursor: pointer;
                 }
                 input {
                  width: 42px;
                  height: 38px;
                  border: none;
                  box-sizing: content-box;
                  text-align: center;
                  outline: none;
                 }
               }
            }
          }
         
        }
        .good_btn{
          margin-top: 30px;
          width: 480px;
          display: flex;
          justify-content: space-around;
          div{
            display: inline-block;
            width: 212px;
            height: 56px;
            line-height: 56px;
            text-align: center;
            border: 1px solid #2ab3fd;
            border-radius: 4px;
            cursor: pointer;
            &:nth-child(1){
              color: #fff;
              background: #2ab3fd;
            }
            &:nth-child(2){
              color: #2ab3fd;
            }
          }
        }
      }
    }
    .good_detail_evaluate{
      width: 100%;
      height: 860px;
      .user{
        margin-bottom: 16px;
        h3{
          width: 100%;
          height: 60px;
          background: #F7F7F7;
          font-weight: 400;
          color: #686868;
          line-height: 60px;
          padding-left: 14px;
        }
        p{
          height: 62px;
          font-size: 14px;
          color: #424242;
          padding-left: 18px;
          display: flex;
          align-items: center;
          span:nth-child(2){
            font-size: 36px;
            color: #2AB3FD;
            margin: 0 36px;
          }
        }
      }
      .all{
        h3{
          width: 100%;
          height: 60px;
          background: #F7F7F7;
          font-weight: 400;
          color: #686868;
          line-height: 60px;
          padding-left: 14px;
          display: inline-flex;
          align-items: center;
          span{
            margin-right: 40px;
            display: inline-flex;
            align-items: center;
            cursor: pointer;
            i{
              display: inline-block;
              margin-right: 10px;
              width: 20px;
              height: 20px;
              background: url(${buy_spirit});
              background-position: -202px -243px;
              &.good.active{
                background-position: -14px -246px;
              }
              &.medium, &.bad{
                background-position: -65px -245px;
              }
              &.medium.active, &.bad.active{
                background-position: -39px -246px;
              }
            }
          }
        }
        ul{
          li{
            height: 164px;
            box-sizing: border-box;
            padding: 36px 0 0 18px;
            display: flex;
            border-bottom: 1px solid #eeeeee;
            &.null{
              font-size: 26px;
              color: #464646;
            }
            .user_info{
              display: inline-flex;
              height:34px;
              width: 150px;
              align-items: center;
              img{
                width: 34px;
                height: 34px;
                border-radius: 50%;
                background: #2AB3FD;
                margin-right: 16px;
              }
            }
            .evaluate_info{
              width: 400px;
              display: inline-flex;
              flex-direction: column;
              padding-top: 10px;
              height: 100%;
              .level{
                span{
                  display: inline-flex;
                  align-items: center;
                  margin-right: 40px;
                  i{
                    display: inline-block;
                    width: 20px;
                    height: 20px;
                    background: url(${buy_spirit});
                    margin-right: 6px;
                    background-position: -202px -243px;
                    &.good.active{
                      background-position: -14px -246px;
                    }
                    &.medium, &.bad{
                      background-position: -65px -245px;
                    }
                    &.medium.active, &.bad.active{
                      background-position: -39px -246px;
                    }
                  }
                }
              }
              .evaluate_info_item{               
                font-size: 12px;
                font-weight: normal;
                color: #000000;
                line-height: 40px;
              }
              .evaluate_time{
                font-size: 12px;
                line-height: 36px;
                .good_type{
                  color: #5d5d5d;
                  margin-right: 30px;
                }
                .time{
                  color: #b8b8b8;
                }
              }
            }
          }
        }
      }
    }
  }
`




//  通用组件
const ImgZooeWrap = styled.div `
  border: 1px solid #e5e5e5;
  width: ${({width}) => width}px;
  height: ${({height}) => height}px;
  border-radius: ${({bor_rad}) => bor_rad}px;
  /* text-align: center; */
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  img{
    width: 60%;
    /* display: inline-block;
    vertical-align: middle; */
    /* &+span{
      display: inline-block;
      height: 100%;
      vertical-align: middle;
    } */
  }
`


export {
  GoodDetailWrap,
  ImgZooeWrap,
}