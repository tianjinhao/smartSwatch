import React, { Component } from 'react';

import axios from 'axios'
import {ShoppingWarp, List} from './styledCart'


class CartBodyshoppingCart extends Component {
  state={
    num:1,
    show:true,
    data:[]
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
  handleCheck = () =>{
    this.setState({
      show:!this.state.show
    })
  }
  handleCheck2 = (i) =>{

  }
  componentDidMount() {
    const _this = this
    axios({
      method:'POST',
      url:'http://10.9.27.126:8080/cart/showCart',
      data:{
        "userId":"1",
        "limit":"5",
        "offset":"1"
      }
    }).then(function (response) {
      response.data.data.forEach(element => {
        element.checked = false;
      });
      console.log(response.data.data);
      _this.setState({
        data:response.data.data
      })
      console.log(_this.state.data);
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  render() {
    return (
      <ShoppingWarp>
        <div className='tabTitle'>
          <div className={this.state.show?'tabicon2':'tabicon'} onClick={this.handleCheck}></div>
          <span>全选</span>
          <span style={{marginLeft:'312px'}}>单价（元）</span>
          <span style={{marginLeft:'65px'}}>数量</span>
          <span style={{marginLeft:'75px'}}>小件（元）</span>
          <span style={{marginLeft:'60px'}}>完成</span>
        </div>
        <ul className='tabUl'>
          {
            this.state.data.map((v,i)=>(
              <List key={v.commodityId}>
                <div className={v.checked?'tabicon3':'tabicon'} onClick={this.handleCheck2(i)}></div>
                  <img src={v.imageUrl} alt=""/>
                  <div className='description'>
                    <span className='productName'>{v.commodityName}</span>
                    <span className='producttitle'>{v.describe[0]}|{v.describe[1]}</span>
                  </div>
                  <span className='price'>￥{v.commodityPrice}</span>
                  <div className='productPrice'>
                    <button style={{backgroundPosition:'-78px -82px',outline:'none',cursor: 'pointer'}} onClick={this.decreament}></button>
                    <input type="text" value={v.commodityNum} style={{outline:'none'}} onChange={this.handlerChilck}/>
                    <button style={{backgroundPosition:'-78px -115px',outline:'none',cursor: 'pointer'}}  onClick={this.increament}></button>
                  </div>
                  <div className='total'><div></div><p>{v.commodityNum*v.commodityPrice}</p></div>
                  <button className='delete' style={{backgroundPosition:'-83px -153px'}} onClick={this.handlerChilck2}></button>
              </List>
            ))
          }
        </ul>
        <div className='tabTitle'></div>
        <div className='pagination'></div>
      </ShoppingWarp>
    );
  }
}

export default CartBodyshoppingCart;