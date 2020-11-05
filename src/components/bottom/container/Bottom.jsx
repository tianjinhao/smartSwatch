import React from 'react';
import {Bot} from './StyledBottom'
import {Link,NavLink} from 'react-router-dom'


function Bottom(props) {
  return (
    <Bot>
      <div>
        {/* 电话部分 */}
        <ul className='phone'>
          <li>400-990-1092</li>
          <li className='phone-line'>
            <p></p>
            <p></p>
          </li>
          <li> 周一至周五 9:00-21:00（仅收市费）</li>
          <li> 周六至周日 9:00-18:00（仅收市费）</li>
        </ul>
        {/* 订单部分 */}
        <ul className='order'>
          <li>订单服务</li>
          <li className='order-line'>
            <p></p>
            <p></p>
          </li>
          <li><NavLink to='/buyguide'>购买指南</NavLink></li>
          <li>支付方式</li>
          <li>送货政策</li>
        </ul>
        {/* 服务支持部分 */}
        <ul className='order support'>
          <li>服务支持</li>
          <li className='order-line'>
            <p></p>
            <p></p>
          </li>
          <li>售后服务</li>
          <li><Link to='/problems'>常见问题</Link></li>
        </ul>
        {/* 关于我们部分 */}
        <ul className='order about'>
          <li>关于我们</li>
          <li className='order-line'>
            <p></p>
            <p></p>
          </li>
          <li><Link to='/understand'>了解我们</Link></li>
          <li><Link to='/develop'>发展历程</Link> </li>
          <li>联系我们</li>
        </ul>
        {/* 关注我们 */}
        <ul className='attention'>
          <li>关注我们（微博/微信）</li>
          <li className='attention-line'>
            <p></p>
            <p></p>
          </li>
          <li>
            <span></span>
            <span></span>
          </li>
        </ul>
        <div>
          {/* 下面的横线部分 */}
        </div>
        <p className='introduction'>
        © 2019  smartwatch   Technology Co.,Ltd.All Rights Reserved.网站使用条款 | 隐私条款 | 粤ICP备14040171号-1
        </p>
      </div>
    </Bot>
  );
}

export default Bottom;