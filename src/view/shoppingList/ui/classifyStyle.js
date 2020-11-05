import styled from 'styled-components'

import img from '@a/images/bottom/shop.png'

const ProductClassify = styled.div`
  display:flex;
  .product{
    margin-right:5px;
    text-align:center;
    height:49px;
    padding:0 20px 0 25px;
    display:flex;
    align-items:center;
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
          width:250px;
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
            label{
              margin-left:18px;
            }
          }
        }
      }
  
      
    }
 
  .product:hover{
    background:url(${img}) no-repeat -128px -135px;
    width: 95px;
	  height: 52px;
    P{
      display:none;
    }
    div{
        display:block;
      }
    }
  
`

export {
  ProductClassify
}