import React from 'react';
import {List} from './style'
import Img from '../img/problem.jpg'
function TopList(props) {
  return (
    <List>
      <ul>
        <li>
          | 售后服务
        </li>
        <li>
          | 常见问题
        </li>
        <li>
          | 官方视频
        </li>
      </ul>
      <div>
        <img src={Img} alt=""/>
      </div>
    </List>
  );
}
export default TopList;