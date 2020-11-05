import React from 'react';
import TopList from './TopList'
import {Total} from './style'
import Characters from '../ui/Characters'
function TotalCon(props) {
  return (
    <Total>
      <TopList></TopList>
      <Characters></Characters>
    </Total>
  );
}

export default TotalCon;