import React from 'react';
import { Route } from 'react-router-dom'
import { PerCenterUiWrap } from './StyledPerCenter'
import Address from './Address'
import AccManage from './accManage/AccManage'

function PerCenterUi(props) {
  return (
    <PerCenterUiWrap className="t_percenter">
      <Route path="/shoppingcart/percenter/accmanage" component={AccManage}></Route>
      <Route path="/shoppingcart/percenter/address" component={Address}></Route>
    
    </PerCenterUiWrap>
  );
}

export default PerCenterUi;