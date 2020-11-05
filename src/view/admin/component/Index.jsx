import React, { Component } from 'react';

import Head from '@ad/component/Head';
import BgPic from '@ad/component/BgPic';

export default class Admin extends Component {
  render() {
    return (
      <div style={{ position: "relative" }} className="admin">
        <Head></Head>
        <BgPic></BgPic>
      </div>
    );
  }
}
