import React, { createRef } from "react";

import { NewZoneWrap } from "./StyledTHome";

import CateTitle from "@c/Thome/CateTitle";
import newImg from "@a/images/home/hot/新品专区-1.png";
import Cate from "@c/Thome/Cate";
import CateItem from './CateItem'

import { Carousel } from "element-react";



class NewZone extends React.Component {
  constructor(props) {
    super(props)
    this.swiper = createRef();
  }
  state={
    type: 'watch'
  }
  // 点击后切换类别
  handleClick =  (type) => {
    return () => {
      this.setState({
        type
      })
      switch(type) {
        case "watch": 
          return this.swiper.current.setActiveItem(0)
        case "wrist" : 
          return this.swiper.current.setActiveItem(1)
        case "sports" : 
          return this.swiper.current.setActiveItem(2)
        default: 
          break;
      }
    }
  }

  switchHandler(index) {
    switch(index) {
      case 0 : 
        return this.setState({
           type: "watch"
        })
      case 1 : 
        return this.setState({
           type: "wrist"
        })
      case 2 : 
        return this.setState({
           type: "sports"
        })
      default: 
        break;

    }
  }

  changeHandler = (index) => {
    this.switchHandler(index)
  }


  render() {
    return (
      <>
        <CateTitle title="新品专区" pic={newImg}></CateTitle>
        <Cate onHotSwitch={this.handleClick} type={this.state.type} ></Cate>
        <NewZoneWrap>
          <Carousel 
            onChange={this.changeHandler}
            autoplay={false}
            trigger="click"
            ref={this.swiper}
          >
            <Carousel.Item >
              <div className="new_list">
                <ul>
                  {
                    this.props.newZoneData.watchRes.map((item => {
                      return <CateItem key={item.commodityId} item={item}></CateItem>
                    }))
                  }
                </ul>
              </div>
            </Carousel.Item>
            <Carousel.Item >
              <div className="new_list">
                <ul>
                {
                    this.props.newZoneData.wristRes.map((item => {
                      return <CateItem key={item.commodityId} item={item}></CateItem>
                    }))
                  }
                </ul>
              </div>
            </Carousel.Item>
            <Carousel.Item >
              <div className="new_list">
                <ul>
                {
                    this.props.newZoneData.sportsRes.map((item => {
                      return <CateItem key={item.commodityId} item={item}></CateItem>
                    }))
                  }
                </ul>
              </div>
            </Carousel.Item>
            
            
          </Carousel>
        </NewZoneWrap>
      </>
    );
  }
}

export default NewZone;
