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
    li:first-child{
      font-weight: bold;
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
  li{
    font-size: 16px;
    font-family: SourceHanSansCN;
    font-weight: bold;
    color: #464646;
    margin-top:32px;
    p{
      font-size: 16px;
      font-family: SourceHanSansCN;
      font-weight: 400;
      color: #464646;
      margin-top:16px;
    }
    p:first-child{
      margin-top:22px;
    }
  }
`

export  {
  Total,
  List,
  Content
}