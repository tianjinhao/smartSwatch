import React, { Component } from "react";
import { Carousel } from "element-react";

import { TSwiperWrap } from './StyledTSwiper'

// import banner2 from '@a/images/home/swiper/banner2.png'
// import banner3 from '@a/images/home/swiper/banner3.png'
// import banner4 from '@a/images/home/swiper/banner4.png'

class TSwiper extends Component {

  render() {
    return (
      <TSwiperWrap>
        <Carousel trigger="click" >
          {/* <Carousel.Item >
            <div className="swiper_img_box">
             <img src={banner1} alt=""/> 
            </div>
          </Carousel.Item> */}

          {
            this.props.swiperData.map((item) => {
              return <Carousel.Item key={item.commodityId}>
                      <div className="swiper_img_box">
                      <img src={item.imageUrl} alt=""/> 
                      </div>
                    </Carousel.Item>
            })
          }


          {/* <Carousel.Item >
            <div className="swiper_img_box">
             <img src={banner2} alt=""/> 
            </div>
          </Carousel.Item>
          <Carousel.Item >
            <div className="swiper_img_box">
             <img src={banner3} alt=""/> 
            </div>
          </Carousel.Item>
          <Carousel.Item >
            <div className="swiper_img_box">
             <img src={banner4} alt=""/> 
            </div>
          </Carousel.Item> */}
          
        </Carousel>
      </TSwiperWrap>
    );
  }
}

export default TSwiper;
