import styled from 'styled-components'
import a from "@ad/component/images/backgroundpic.jpg"

const StyleIndex = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px auto;
  width: 1300px;
`
const StyleHead = styled.div`
    width: 1300px;
    margin: 0px auto;
    height: 100px;
    img{
      padding: 38px 0 30px 0px;
    }
`
const StyleBgPic = styled.div`
  height:756px;
  width: 1920px;
  margin-left: -360px;
  background:url(${a}) no-repeat ; 
  background-size: cover;
  background-position: center 0;
  position: relative;
`

const StyleFoot = styled.div`
  width: 1300px;
  margin: 36px auto 0 auto;
  font-size: 14px;
  color: #80878A;
  float:left;
  .code{
    float:right;
    margin-top: -36px;
  }
`

export {
  StyleHead,
  StyleBgPic,
  StyleFoot,
  StyleIndex
}
