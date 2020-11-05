import styled from 'styled-components'

const StyleHead = styled.div`
    margin: 25px 0;
    img{
      margin-right: 16px;
    }
`
const StyleBgPic = styled.div`
    position:absolute; 
    left:50%; 
    margin-left: -960px;
    img{
      position:relative; 
      width:100%;
    }
    .logo{
      position:relative; 
      img{
        position:absolute;
        left: 440px;
        top: -240px; 
        width: 220px;
        height: 32px;
        z-index:1
      }
    }
`

const StyleFoot = styled.div`
  margin: 0 auto;
  width: 960px;
  font-size: 12px;
  color: #ccc;
`

export {
  StyleHead,
  StyleBgPic,
  StyleFoot
}
