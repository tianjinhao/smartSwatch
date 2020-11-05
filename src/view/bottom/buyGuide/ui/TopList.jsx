import React from 'react';
import {List} from './style'
import Img from '../img/guide.jpg'
function TopList(props) {
  return (
    <List>
      <ul>
        <li>
          | 购买指南
        </li>
        <li>
          | 支付方式
        </li>
        <li>
          | 送货政策
        </li>
      </ul>
      <div>
        <img src={Img} alt=""/>
      </div>
    </List>
  );
}
export default TopList;