import styled from 'styled-components'

const TSwiperWrap = styled.div `
  width: 100%;
  height: 764px;
  .el-carousel{
    height: 100%;
    .el-carousel__container{
      height: 100%;
      .swiper_img_box{
        width: 100%;
        position: relative;
        img{
          width: 1920px;
          height: 764px;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
        }
      }
      .el-carousel__arrow{
        width: 100px;
        height: 100px;
        .el-icon-arrow-left,.el-icon-arrow-right {
          font-size: 20px;
        }
      }
    }
    .el-carousel__indicators{
      .el-carousel__button{
        width: 6px;
        height: 6px;
        background: #FFFFFF;
        border-radius:50%;
        box-shadow: 0 0 0 2px rgba(244,244,244), 0 0 0 3px #fff;
        margin: 0 10px;
      }
    }
  }
`


export {
  TSwiperWrap
}