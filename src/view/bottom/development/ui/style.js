import styled from 'styled-components'

const Total = styled.div`
  width:1300px;
  margin:0 auto;
`
const List = styled.div`
  margin-top:10px;
  ul{
    display:flex;
    li{     
      font-size: 16px;
      font-family: SourceHanSansCN;
      font-weight: 400;
      color: #464646;
      margin-right:19px;
    }
  }
  div{
    margin-top:53px;
    text-align:center;
  }
`

const Content = styled.div`
  width:1160px;
  margin:0 auto;
  margin-top:38px;
  .false-title{
          display:flex;
  }
  ul{
    li{
      font-size: 30px;
      font-family: SourceHanSansCN;
      font-weight: 400;
      color: #000000;
      margin-top:58px;
      p{
        span{
          font-size: 16px;
          font-family: SourceHanSansCN;
          font-weight: 400;
          color: #000000;
        }
        span:first-child{
          margin-right:90px;
        }
      }
    }
    li:first-child{
      margin-top:54px;
    }
    li:last-child{
      margin-top:72px;
    }
  }
`

export  {
  Total,
  List,
  Content
}