import React from 'react';

import BgPics from './images/backgroundpic.jpg';
import Logo from './images/logo.png'
import Foot from '@ad/component/Foot';

import {
  StyleBgPic
} from './StyledAdmin'


const BgPic = (() => {
  return (
    <StyleBgPic>
        <img src={BgPics} alt="" />
        <div className="logo">
          <img src={Logo} alt="" />
          <Foot></Foot>
        </div>
    </StyleBgPic>
  );
});

export default BgPic;

