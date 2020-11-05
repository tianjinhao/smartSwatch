import React from 'react';
import { VideoWrap } from '../StyledTHome'
import video1 from '@a/video/Thome/视频1.mp4'

function Video(props) {
  return (
    <VideoWrap className="video_con_item_v">
      <video controls src={video1}></video>
    </VideoWrap>
  );
}

export default Video;