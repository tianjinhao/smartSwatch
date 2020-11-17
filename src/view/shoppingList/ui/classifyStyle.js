import styled from 'styled-components'

import img from '@a/images/bottom/shop.png'
import img1 from './a.png'
const ProductClassify = styled.div`
  display:flex;
  .product{
    margin-right:5px;
    text-align:center;
    height:52px;
    width: 95px;
    display:flex;
    align-items:center;
    justify-content:center;
    position: relative;
    p{
      font-size: 16px;
      font-family: SourceHanSansCN;
      font-weight: 400;
      color: #626262; 
      display:flex;
      align-items:center;
      p{
        background: url(${img}) no-repeat -77px -143px;
	      width: 12px;
	      height: 7px;
        margin-left:7px;
        }
      }
      div{
        display:none;
        ul{
          display:flex;
          flex-wrap:wrap;         
          position:absolute;
          border:1px solid #D9D9D9;
          left:0;
          background:#fff;
          top:52px;
          z-index:999;
          li{
            display:flex;
            height:50px;
            width:120px;
            align-items: center;         
            font-size: 14px;
            font-family: SourceHanSansCN;
            font-weight: 300;
            color: #787878;
            line-height: 11px;
            input{
              margin-left:31px;
            }
            h5{
              margin-left:18px;
              font-size: 14px;
              font-family: SourceHanSansCN;
              font-weight: 300;
              color: #787878;
              line-height: 11px;
            }
          }
        }
      }
    }
 
  .product:hover{
    background: linear-gradient(139deg, #4742FC, #26BBFF, #26BBFF);
    P{
      color: #F1F1F1;
      p{
      background:url(${img1}) no-repeat;
    }
    }

    div{
        display:block;
      }
    }
  
`

export {
  ProductClassify
}