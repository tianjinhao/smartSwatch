import React from 'react';
import {Content} from './style'
import person from '../img/person_03.png'
function Characters(props) {
  return (
    <Content>
      <ul>
        <li>首页</li>
        <li>|</li>
        <li>公司简介</li>
      </ul>
      <p>华米科技创立于2013年，是一家在智能穿戴技术领域有着丰富生物特征识别经验和运动数据驱动的公司，拥有全球用户海量的生物识别与运动数据库，为
用户提供综合评估及分析等服务。华米科技旗下产品主要包括小米品牌的智能手环及智能秤、自主品牌AMAZFIT系列的智能手表及智能手环等，共16次获得德国iF、德国Red Dot、日本G Mark、中国设计红星奖金等全球工业设计奖。
      </p>
      <div>
        <img src={person} alt=""/>
        <ul>
          <li>黄汪</li>
          <li>创始人 CEO</li>
          <li>毕业于中国科学技术大学</li>
          <li>也是中国最早将Linux用于镶入式系统的技术专家。</li>
          <li>他还是一位连续创业者，获得“2015安徽年度经济人物”称号。</li>
        </ul>
      </div>
    </Content>
  );
}

export default Characters;