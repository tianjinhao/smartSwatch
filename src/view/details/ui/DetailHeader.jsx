import React from 'react';
import { Header } from './StyleDetail'
import {useLocation} from 'react-router-dom'
import { Link } from 'react-router-dom'

function DetailHeader(props) {
  let { search } = useLocation()
  let query = new URLSearchParams(search)
  // console.log(props);
  props.getId(query.get('id'))
  return (
    <Header>
      <span>{query.get('name')}</span>
      <span>产品参数</span>
      <div>
        <Link to='/gooddetail'>立即购买</Link>
      </div>
    </Header>
  );
}

export default DetailHeader;