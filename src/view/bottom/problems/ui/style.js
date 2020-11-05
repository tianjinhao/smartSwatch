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
  ul{
    li{
      font-size: 16px;
      font-family: SourceHanSansCN;
      font-weight: bold;
      color: #464646;
      margin-top:22px;
      p{
        font-size: 16px;
        font-family: SourceHanSansCN;
        font-weight: 400;
        color: #464646;
        line-height: 30px;
        margin-top:14px;
      }
    }
  }
`

export  {
  Total,
  List,
  Content
}