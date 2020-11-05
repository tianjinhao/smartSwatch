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
  ul:first-child{
    display:flex;
    li{
      font-size: 16px;
      font-family: SourceHanSansCN;
      font-weight: 400;
      color: #464646;
    }
    li:first-child{
      margin-right:16px;
    }
    li:last-child{
      margin-left:10px;
    }
  }
  p{
    margin-top:22px;
    text-indent:2em;
  }
  div{
    display:flex;
    margin-top:55px;
    margin-left:102px;
    ul:last-child{
      display:flex;
      flex-direction:column;
      margin-left:72px;
      li{
        margin-bottom:15px;
        font-size: 16px;
        font-family: SourceHanSansCN;
        font-weight: 400;
        color: #464646;
      }
      li:first-child{
          font-size: 30px;
          font-family: SourceHanSansCN;
          font-weight: bold;
          color: #464646;
      }
      li:nth-child(2){
        font-size: 24px;
        font-family: SourceHanSansCN;
        font-weight: 400;
        color: #464646;
      }
    }
  }
`

export  {
  Total,
  List,
  Content
}