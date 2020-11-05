import React from 'react';
import {Content} from './style'
function Characters(props) {
  return (
    <Content>
      <ul>
        <li>2018
          <p>
            <span>07月04日</span>
            <span>美国纽交所上市，发行价定为11美元，募资1.1亿美元</span>
          </p>
          <p className='false-title'>
            <span>06月04日</span>
            <h1>
              <span>对外宣布完成近亿元B+轮融资，由泓锦文资本领投，中韩基金、慧泉资本、</span>
              <br/>
              <span>日播时尚等多个领域基金跟投</span>
            </h1>
          </p>
          <p>
            <span>05月04日</span>
            <span>对外宣布完成B轮近1000万美元融资，由LB Investment领投和明势资本跟投；</span>
          </p>
          <p>
            <span>05月01日</span>
            <span>进军英国，签订英国独家代理；</span>
          </p>
        </li>
        <li>2017
          <p>
            <span>10月30日</span>
            <span>单品销量突破10 万台；</span>
          </p>
          <p>
            <span>10月20日</span>
            <span>进军韩国市场，签订韩国独家代理；</span>
          </p>
          <p>
            <span>06月18日</span>
            <span>京东 618 单日销量 15,000 台，总销量 26,000 台，同品类第一；</span>
          </p>
        </li>
        <li>2014
          <p>
            <span>12月15日</span>
            <span>Smartwatch 公司成立</span>
          </p>
        </li>
      </ul>
    </Content>
  );
}

export default Characters;