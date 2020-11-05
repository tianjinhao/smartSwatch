import React from 'react';
import {ThreeEl} from './listStyle.js'
function Sort(props) {
  return (
    <ThreeEl>
      <p className='classify'>排序:</p>
      <span>默认</span>
      <span>销量</span>
      <span>评价</span>
      <span>价格 ：
        <h2>￥</h2><input type="text"/>&nbsp;-&nbsp;<h2>￥</h2><input type="text"/>
      </span>
      <span>
        <p>&lt;</p>
        <p className='firstPage'>1</p>
        /
        <p className='lastPage'>3</p>
        <p>&gt;</p>
      </span>
    </ThreeEl>
  );
}

export default Sort;