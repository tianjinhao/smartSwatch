import React from 'react';
import { VideoTextWrap } from '../StyledTHome'
function VideoText(props) {
  return (
    <VideoTextWrap className='video_text'>
      <p>
        <span>智能时代将会</span>
        <span>改变你</span>
      </p>
      <p>The Age of Intelligence Will Change You</p>
      <p>
        <span>我们的使命是将人类真实的</span>
        <span>情感及活动无感地连入互联网，改善人们的生活</span>
      </p>
      <button className="video_btn">点击探索</button>
    </VideoTextWrap>
  );
}

export default VideoText;