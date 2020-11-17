import React,{useEffect,useState} from 'react';
import {ImgCon} from './StyleDetail'
import axios from 'axios'



function DetailImg(props) {
  let [data,setData] = useState([])
  useEffect(()=>{
    async function loadData() {
      let result = await axios({
        method:"GET",
        url:'http://10.9.27.159:8080/commodity/getCommodityDetails',
        params:{
          commodityId:props.id
        }
      })
      setData(result.data)
    }
    loadData()
  },[props.id])
  return (
    <ImgCon dangerouslySetInnerHTML={{__html: data}}>
    </ImgCon>
  );
}

export default DetailImg;