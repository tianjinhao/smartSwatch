import React from 'react';
import {VideoZoneWrap} from '../StyledTHome'
import more from '@a/images/home/hot/探索更多-箭头.png'
import Video from './Video'
import VideoText from './VideoText'
function VideoZone(props) {
  return (
    <VideoZoneWrap>
      <div className="video_zone">
        <h3 className="to_us">了解我们<img src={more} alt=""/></h3>
        <div className="video_con">
          <div className="video_con_item">
            <VideoText></VideoText>
            <Video></Video>
          </div>
          <div className="video_con_item">
            <VideoText></VideoText>
            <Video></Video>
          </div>
        </div>
      </div>
    </VideoZoneWrap>
  );
}

export default VideoZone;