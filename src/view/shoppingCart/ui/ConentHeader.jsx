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
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Link to='/home/car'>购物车</Link>
        <Route path='/home/car' component=''></Route>
      </Breadcrumb>
    </HeadStyle>
  );
}

export default conentHeader;