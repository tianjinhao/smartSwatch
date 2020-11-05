import React from 'react';
import {Content} from './style'
function Characters(props) {
  return (
    <Content>
      <ul>
        <li>手表无法连接手机
          <p>1)  请先确认您的手机设备蓝牙是否已打开，可在手机的“无线与网络”选项中查看。</p>
          <p>2)  请先确认您的手表蓝牙是否已开启，检查方法如下：
            <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;按压手表3点位按键一下，如12点位和6点位指示灯闪烁两次即表示蓝牙已开启；
            <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;如只有6点位指示灯闪烁，则表示蓝牙处于关闭状态。
            <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;开启与关闭手表蓝牙方式：
            <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;长按3点位按键3至5秒钟，12点位灯闪烁一次关闭蓝牙。
            <br/>
            3)  您可以重新开启蓝牙或者重新启动手机以尝试连接。</p>
        </li>
        <li>来电、微信或其他手机提醒功能，手表均无反应
          <p>
            请您确认手表与手机是否处于连接状态，并且在手机设置勾选允许“华唛智能”后台运行的权限，允许“Smartwatch”通知权限，否则手表的手机提醒功能无法正常运行。
          </p>
        </li>
        <li>遥控拍照功能黑屏
          <p>请您确认手表与手机是否处于连接状态，并且同意“Smartwatch”读取您手机设备摄像头的请求。</p>
        </li>
      </ul>
    </Content>
  );
}

export default Characters;