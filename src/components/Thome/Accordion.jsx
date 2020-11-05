import React, { Component } from 'react';
import { AccordionWrap } from './StyledThomeNav'

class Accordion extends Component {
  render() {
    return (
      <AccordionWrap>
        <div>
          <h3>以科技、健康、美为理念</h3>
          <p>我们一改目前国内智能可穿戴市场只面向高端人群的弊端，率先将智能穿戴理念植入普通大众的运动健康生活中，把顶级穿戴设备带给每一个人，让大众都开始重视运动健康，</p>
        </div>
        <div>
          <h3>顶级的穿戴 普世的价值</h3>
        </div>
        <div>
          <h3>变革穿戴科技 极致人生态度</h3>
        </div>
        <div>
          <h3>把顶级穿戴设备带给每一个人</h3>
        </div>
      </AccordionWrap>
    );
  }
}

export default Accordion;