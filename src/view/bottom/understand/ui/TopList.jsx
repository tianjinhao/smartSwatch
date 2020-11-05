import React from 'react';
import {List} from './style'
import Img from '../img/under.jpg'
function TopList(props) {
  return (
    <List>
      <ul>
        <li>
          | 公司简介
        </li>
        <li>
          | 发展历程
        </li>
        <li>
          | 联系我们
        </li>
      </ul>
      <div>
        <img src={Img} alt=""/>
      </div>
    </List>
  );
}
export default TopList;