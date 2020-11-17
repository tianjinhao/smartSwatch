import React from 'react';
import { NavLink, Route, Switch,Redirect } from 'react-router-dom'

import { BodyWarp, Recommend } from "./styledCart";
import CartBodyShoppingCart from './CartBodyShoppingCart copy 2'
import CartBodyFavorites from './CartBodyFavorites'
import CartBodyOrder from './CartBodyOrder'
import OrderCommon from './OrderCommon'

function cartBody(props) {
  return (
    <BodyWarp>
      <div className='box1'>
        <div className='box-title'>
          <div className='icon' style={{width:'16px',height:'16px',backgroundPosition:'-43px -56px'}}></div> 
          <NavLink to='/shoppingcart/car' 
          activeStyle={{
            fontWeight: 'bold',                
            color: '#51D5F8'
          }}>
            <div className='box-card'><span onClick={props.changestate}>购物车</span></div>
          </NavLink></div>
        <div className='box-title'>
        <div className='icon' style={{width:'17px',height:'17px',backgroundPosition:'-43px -91px'}}></div> 
          <div className='box-card'>
            <span onClick={props.changestate}>收藏夹</span>
          <NavLink to='/shoppingcart/favorites' 
          activeStyle={{
            fontWeight: 'bold',
            color: '#51D5F8'
          }}>
            <p>我的收藏</p>
            </NavLink></div>
        </div>
        <div className='box-title'>
        <div className='icon' style={{width:'14px',height:'16px',backgroundPosition:'-44px -128px'}}></div> 
          <div className='box-card'>
            <span onClick={props.changestate}>订单中心</span>
            <NavLink to='/shoppingcart/order' 
            activeStyle={{
              fontWeight: 'bold',                
              color: '#51D5F8'
            }}>
              <p>我的订单</p>
            </NavLink>
          </div>
        </div>
        <div className='box-title'>
        <div className='icon' style={{width:'13px',height:'15px',backgroundPosition:'-46px -163px'}}></div> 
          <NavLink to='/shoppingcart/rece' 
            activeStyle={{
            fontWeight: 'bold',                
            color: '#51D5F8'
          }}>
            <div className='box-card'>
              
              <span onClick={props.changestate}>购物车</span>
            </div>
          </NavLink>
        </div>
      </div>
      <div className='box2'>
        <Switch>
          <Route path='/shoppingcart/car' component={CartBodyShoppingCart}></Route>
          <Route path='/shoppingcart/favorites' component={CartBodyFavorites}></Route>
          <Route path='/shoppingcart/order/common' component={OrderCommon}></Route>
          <Route path='/shoppingcart/order' component={CartBodyOrder}></Route>
          <Redirect from='/shoppingcart' to='/shoppingcart/car'></Redirect>
        </Switch>   

      </div>
      <Recommend>
        <span>为你推荐</span>
        <div><img src="" alt=""/> 
        <span className='rmdName'>儿童电话手表</span>
        <span className='rmdPrice'>474元</span>
        <div className='rmdInfo'>
          <span>销量：115</span>
          <span>评价：112</span>
        </div></div>
        <div><img src="" alt=""/> 
        <span className='rmdName'>儿童电话手表</span>
        <span className='rmdPrice'>474元</span>
        <div className='rmdInfo'>
          <span className='sales'>销量：115</span>
          <span>评价：112</span>
        </div></div>
      </Recommend>
    </BodyWarp>
  );
}

export default cartBody;