import React from 'react';
import { BraceletWrap } from './StyledTHome'
import Accordion from '@c/Thome/Accordion'

function Bracelet(props) {
  return (
    <BraceletWrap>
      <div className="bracelet">
        <div className='bracelet_header'>
          <h2>智能手环-带在手上的家</h2>
          <span>Smart Bracelet - Home on Hand</span>
        </div>
          <Accordion></Accordion>
      </div>
    </BraceletWrap>
  );
}

export default Bracelet;