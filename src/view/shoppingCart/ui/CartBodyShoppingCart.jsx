import React, { Component } from 'react';

import { withRouter } from 'react-router-dom'
import {ShoppingWarp} from './styledCart'

@withRouter
class CartBodyshoppingCart extends Component {
  state={
    num:1,
    show:false
  }
  handlerChilck = (e) =>{
    if(e.target.value.length>3) return
    e.target.value = e.target.value.replace(/[^\d.]/g,'')
    this.setState({
      num:e.target.value-0
    })
    console.log(this.state.num);
  }
  increament =() =>{
    this.setState({
      num:this.state.num + 1
    })
  }
  decreament = () =>{
    this.setState({
      num:this.state.num - 1
    })
  }
  onChange = () =>{
    console.log(123123);
  }
  handlerChilck2 = () =>{
    console.log('123123')
  }
  render() {
    console.log(this.props);
    return (
      <ShoppingWarp>
        <div className='tabTitle'>
          <div className='tabicon'></div>
          <span>全选</span>
          <span style={{marginLeft:'312px'}}>单价（元）</span>
          <span style={{marginLeft:'65px'}}>数量</span>
          <span style={{marginLeft:'75px'}}>小件（元）</span>
          <span style={{marginLeft:'60px'}}>完成</span>
        </div>
        <ul className='tabUl'>
          <li >
            <div className='tabicon'></div>
            <img src="" alt=""/>
            <div className='description'>
              <span className='productName'>智能运动手表</span>
              <span className='producttitle'>蓝牙听歌|索尼28纳米GPS</span>
            </div>
            <span className='price'>￥599</span>
            <div className='productPrice'>
              <button style={{backgroundPosition:'-78px -82px'}} onClick={this.decreament}></button>
              <input type="text" value={this.state.num} onChange={this.handlerChilck}/>
              <button style={{backgroundPosition:'-78px -115px'}}  onClick={this.increament}></button>
            </div>
            <div className='total'><div></div><p>599</p></div>
            <button className='delete' style={{backgroundPosition:'-83px -153px'}} onClick={this.handlerChilck2}></button>
          </li>
          <li >
            <div className='tabicon'></div>
            <img src="" alt=""/>
            <div className='description'>
              <span className='productName'>智能运动手表</span>
              <span className='producttitle'>蓝牙听歌|索尼28纳米GPS</span>
            </div>
            <span className='price'>￥599</span>
            <div className='productPrice'>
              <button style={{backgroundPosition:'-78px -82px'}} onClick={this.decreament}></button>
              <input type="text" value={this.state.num} onChange={this.handlerChilck}/>
              <button style={{backgroundPosition:'-78px -115px'}}  onClick={this.increament}></button>
            </div>
            <div className='total'><div></div><p>599</p></div>
            <button className='delete' style={{backgroundPosition:'-83px -153px'}}></button>
          </li>
        </ul>
        <div className='tabTitle'></div>
        <div className='pagination'></div>
      </ShoppingWarp>
    );
  }
}

export default CartBodyshoppingCart;