import React,{useState} from 'react';
import { Banner } from './StyleDetail'
import DetailHeader from './DetailHeader'
import DetailImg from './DetailImg'
function DetailUi(props) {
  let [stateId,setId] = useState()
  const getProId=(id)=>{
    setId(id)
  }
  return (
    <Banner>
      <DetailHeader getId={getProId}></DetailHeader>
      <DetailImg id={stateId}></DetailImg>
    </Banner>
  );
}

export default DetailUi;