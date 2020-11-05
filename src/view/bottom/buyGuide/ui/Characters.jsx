import React from 'react';
import {Content} from './style'
function Characters(props) {
  return (
    <Content>
      <ul>
        <li>
        帮助渠道：
        <p>尊敬的用户您好，感谢您选择我们的产品，如您在购买的过程中遇到任何疑问，可通过以下渠道获得帮助；</p>
        <p>·致电客服咨询：400-990-1092</p>
        <p>·邮件至lianxi@Smartwatch.com</p>
        <p>·通过微博@Smartwatch反馈</p>
        </li>
        <li>购买渠道：
          <p>·Smartwatch科技官网 www.Smartwatch.com</p>
          <p>·Smartwatch科技官网 www.Smartwatch.com</p>
          <p>·京东的Smartwatch官方旗舰店 Smartwatch.jd.com</p>
        </li>
        <li>优惠劵使用方式：
          <p>恭喜您获得Smartwatch的优惠劵！优惠劵有使用时限，请在时限内使用。下单激活优惠码后需尽快完成支付，两小时后未完成支付订单关闭，优惠码即视为已使
用。一个订单只可使用一张优惠劵，若您有多张优惠劵，提交订单时会自动匹配优惠金额最大的优惠劵。</p>
        </li>
        <li>
        发票说明：
        <p>珠海Smartwatch有限公司可以为您开具正规的增值税普通发票、增值税专业发票。</p>
        <p>若需要纸质发票，请联系在线客服，提供订单号、抬头、收票地址。</p>
        <p>若需要电子发票，请联系在线客服，提供订单号、手机号码、电子邮箱。</p>
        <p>·发票只能开具实际购买明细。</p>
        </li>
      </ul>
    </Content>
  );
}

export default Characters;