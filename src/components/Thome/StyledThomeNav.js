import styled from 'styled-components'

import navbg from '@a/images/home/nav/navbgi-10755534e3.png'

import rightBg from '@a/images/home/hot/右-渐变线.png'
import leftBg from '@a/images/home/hot/左-渐变线.png'

const HomeNavWarp = styled.div `
  width: 100%;
  height: 80px;
  background: ${({ bg }) => bg === 1 ? "rgba(255, 255, 255, 0.3)" : "#fff" } ;
  background-image: ${({ bg }) => bg === 1 ? "url(" + navbg + ")" : "none" };  
  position:  ${({ bg }) => bg === 1 ? "absolute" : "static" };
  z-index: 9;
  .home_nav{
    margin: 0 auto;
    width: 1300px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo{
      height: fit-content;
      .logo-img{
        width: 220px;
        height: 32px;
      }
    }
    .nav_list{
      display: flex;
      height: 100%;
      line-height: 80px;
      .nav_item.active li::after{
        display: block;
      }
      li {
        width: 118px;
        height: 100%;
        font-size: 16px;
        color: ${({ bg }) => bg === 1 ? "#fff" : "#464646" };
        text-align: center;
        position: relative;
        cursor: pointer;
        transition: all 2s;
        &::after{
          content: '';
          width: 88px;
          height: 4px;
          position: absolute;
          background:${({ bg }) => bg === 1 ? "#E9EDFF" : "#417AE3" };
          top: 0;
          left: 50%;
          margin-left: -44px;
          display: none;
          transition: all 2s;
        }
        &:hover::after{
          display: block;
        }
      }
    }
    .nav-right{
      color:${({ bg }) => bg === 1 ? "#fff" : "#464646" };
      i {
        cursor: pointer;
        padding: 0 10px;
      }
      .el-popover{
        min-width: 50px;
        background: #bfbfbf;
        padding: 8px;
        .popper__arrow::after{
          border-bottom-color: #bfbfbf;
        }
      }
    }
  }

`

const LoginResWrap = styled.ul `
  li{
    line-height: 24px;
    font-size: 14px;
    color: #fff;
    cursor: pointer;
    text-align: center;
    &:hover{
      color: #286de9;
    }
  }


`


const CateTitleWrap = styled.div `
  width: 100%;
  height: 80px;
  text-align: center;
  line-height: 80px;
  margin-top: 70px;
  position: relative;
  overflow: hidden;
  div{
    width: 1680px;
    height: 80px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    background: url(${leftBg}) no-repeat 0 center,
              url(${rightBg}) no-repeat  1020px center;
    span{
    font-size: 26px;
    font-weight: bold;
    }
    img{
      margin-left: 20px;
      vertical-align: sub;
      position: relative;
      top: -2px;
    }
  }
  
  /* span:last-child{
    vertical-align: super;
    img{
      vertical-align: super;
    }
  } */
  /* div{
    display: inline-block;
  } */
`

const CateWrap = styled.div `
  width: 100%;
  height: 34px;
  margin-bottom: 84px;
  .home-cate{
    width: 1300px;
    height: 34px;
    margin:  0 auto;
    display: flex;
    justify-content: center;
    ul{
      text-align: center;
      height: 34px;
      line-height: 34px;
      display: inline-block;
      position: relative;
      li{
        width: 82px;
        height: 32px;
        display: inline-block;
        cursor: pointer;
        border-radius: 4px;
        position: relative;
        transition: all 200ms ease-in;
        &.active{
          color:#fff;
          z-index: 3;
        }
        &.slide{
          background-image: linear-gradient(to right,#2469e7, #49e5f9);
          position: absolute;
          left: 0;
          top: 0;
          z-index: 2;
        }
        &.slide.middle{
          left: 82px;;
        }
        &.slide.right{
          left: 164px;;
        }
      }
    }
    i{
      margin: 0 20px;
      line-height: 34px;
    }
    span{
      line-height: 34px;
      cursor: pointer;
      img{
        margin-left: 6px;
        position: relative;
        top: -1px;
      }
    }
  }
`

const CateListWrap = styled.div `
  width: 100%;
  height: 810px;
  .cate-list{
    width: 1300px;
    height: 810px;
    padding-left: 44px;
    margin: 0 auto;
    ul{
      display: flex;
      flex-wrap: wrap;
      li{
        margin-right: 18px;
        margin-bottom: 26px;
      }
      li:first-child{
        position: relative;
        width: 598px;
        height: 392px;
        margin-right: 18px;
        margin-bottom: 26px;
        border-radius: 10px;
        background: #fff;
        box-shadow: 0px 2px 5px 1px #ddd;
        cursor: pointer;
      }
    }
  }
`

const CateItemWrap = styled.li `
  position: relative;
  width: 290px;
  height: 392px;
  
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 2px 5px 1px #ddd;
  cursor: pointer;
  .tags{
    position: absolute;
    top:0;
    left: 50%;
    width: 60px;
    height: 30px;
    transform: translateX(-30px);
    text-align: center;
    line-height: 30px;
    span{
      display: inline-block;
      width: 60px;
      height: 30px;
      border-radius: 0 0 3px 3px;
      color: #fff;
    }
    .seckill{
      background: #FFB346;
    }
    .hotcakes{
      background: #3BB4F2;
    }
  }
  .good_img{
    height: 244px;
    margin-top: 30px;
    text-align: center;
    img{
      display: inline-block;
      vertical-align: middle;
    }
    span{
      vertical-align: middle;
      width: 0;
      height: 100%;
      display: inline-block;
      
    }
  }
  .good_info{
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
`

const AccordionWrap = styled.div `
  width: 640px;
  min-height: 440px;
  padding: 50px 40px;
  div{
    width: 560px;
    max-height: 50px;
    text-align: center;
    line-height: 50px;
    margin-bottom: 10px;
   
    overflow: hidden;
    transition: all 0.3s ease-in;
    h3{
      box-shadow: 0px 0px 15px 2px rgba(64, 62, 87, 0.5);
      color: #fff;
      background: linear-gradient(-90deg, #49E5F9, #2460E7);
      cursor: pointer;
    }
    p{
      padding: 36px 20px;
      height: 120px;
      overflow: auto;
      line-height: 24px;
      text-align: left;
      font-size: 12px;
      font-weight: 400;
      color: #727272;
    }
    &.show{
      max-height: 160px;
    }
  }
`

export {
  HomeNavWarp,
  CateTitleWrap,
  CateWrap,
  CateListWrap,
  CateItemWrap,
  AccordionWrap,
  LoginResWrap
}