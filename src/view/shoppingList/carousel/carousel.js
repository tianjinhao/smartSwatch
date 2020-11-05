import styled from 'styled-components'

const Img = styled.div`
  width:100%;
  position: relative;
  margin:0 auto;
  div{
    img{
    display:block;
    margin:0 auto;
    width:1920px;
    height:757px;
    position:absolute;
    left:50%;
    transform:translateX(-50%);
  }
  }
  .el-carousel__button{
    width:12px;
    height:12px;
    border:1px solid #ccc;
    border-radius:50%
  }
`

export {
  Img
}