import styled from 'styled-components'
import img from '../Img/yellowbutton.png'
const Banner = styled.div`
  width:1300px;
  margin:0 auto;
  background:#FFFFFF;
`
const Header = styled.div`
  height:66px;
  display:flex;
  span{
    font-size: 13px;
    font-family: SourceHanSansCN;
    font-weight: bold;
    color: #938C80;
    line-height: 30px;
  }
  span:first-child{
    margin-right:40px;
  }
  div{
    margin-left:974px;
    background: url(${img}) no-repeat -166px -445px;
    width: 80px;
    height: 31px;
    font-size: 12px;
    line-height:31px;
    font-family: Adobe Heiti Std;
    font-weight: normal;
    text-align:center;
    a{
      color: #FFFDF3;
    }
  }
`
const ImgCon = styled.div` 
    img{
      width:100%;
      height:100%;
      margin-bottom:0;
  }
` 

export {
  Banner,
  Header,
  ImgCon
}