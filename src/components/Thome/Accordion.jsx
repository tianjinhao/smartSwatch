import React, { Component } from 'react';
import { AccordionWrap } from './StyledThomeNav'

class Accordion extends Component {
  state = {
    index:0
  }

  handleClick = (index) => {
    return () => {
      this.setState({
        index
      })
    }
  }


  render() {
    return (
      <AccordionWrap>
        <div className={this.state.index === 0 ? "show" : ""} >
          <h3 onClick={this.handleClick(0)}>以科技、健康、美为理念</h3>
          <p>我们一改目前国内智能可穿戴市场只面向高端人群的弊端，率先将智能穿戴理念植入普通大众的运动健康生活中，把顶级穿戴设备带给每一个人，让大众都开始重视运动健康，</p>
        </div>
        <div className={this.state.index === 1 ? "show" : ""} >
          <h3 onClick={this.handleClick(1)}>顶级的穿戴 普世的价值</h3>
          <p>我们一改目前国内智能可穿戴市场只面向高端人群的弊端，率先将智能穿戴理念植入普通大众的运动健康生活中，把顶级穿戴设备带给每一个人，让大众都开始重视运动健康，</p>
        </div>
        <div className={this.state.index === 2 ? "show" : ""} >
          <h3 onClick={this.handleClick(2)}>变革穿戴科技 极致人生态度</h3>
          <p>我们一改目前国内智能可穿戴市场只面向高端人群的弊端，率先将智能穿戴理念植入普通大众的运动健康生活中，把顶级穿戴设备带给每一个人，让大众都开始重视运动健康，</p>
        </div>
        <div className={this.state.index === 3 ? "show" : ""}  >
          <h3 onClick={this.handleClick(3)}>把顶级穿戴设备带给每一个人</h3>
          <p>我们一改目前国内智能可穿戴市场只面向高端人群的弊端，率先将智能穿戴理念植入普通大众的运动健康生活中，把顶级穿戴设备带给每一个人，让大众都开始重视运动健康，</p>
        </div>
      </AccordionWrap>
    );
  }
}

export default Accordion;