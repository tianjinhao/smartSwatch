import React from 'react';

import { Breadcrumb } from 'antd';
import {Route, Link} from 'react-router-dom'

import {
  
} from '@ant-design/icons';
import {HeadStyle} from './styledCart'

function conentHeader(props) {
  return (
    <HeadStyle>
      <Breadcrumb separator=">">
        <Breadcrumb.Item><Link to='/home'>首页</Link></Breadcrumb.Item>
        <Link to='/shoppingcart/car'>{props.data}</Link>
        <Route path='/shoppingcart/car' component=''></Route>
      </Breadcrumb>
    </HeadStyle>
  );
}

export default conentHeader;