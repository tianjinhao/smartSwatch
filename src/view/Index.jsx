import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'


import ThomeNav from '@c/Thome/ThomeNav'
import Bottom from '@c/bottom/container/Bottom'

/* 首页 */
import THome from './home/THome'

/* 底部跳转页面 */
import BuyGuide from './bottom/buyGuide/container/BuyGuide'
import Develop from './bottom/development/container/Develop'
import Problems from './bottom/problems/container/Problems'
import Understand from './bottom/understand/container/Understand'
import GoodDetail from './Tbuy/GoodDetail'
import Order from './Tbuy/Order'
import ShoppingCart from './shoppingCart/container/ShoppingCart'
import ShopContainer from './shoppingList/container/ShopContainer'





class index extends Component {
  render() {
    return (
        //  顶部导航
      <>
        <header>
          <ThomeNav bg={0}></ThomeNav>
        </header>
        <main >
          <Switch>
            <Route path='/home' component={THome}></Route>
            <Route path='/buyguide' component={BuyGuide}></Route>
            <Route path='/develop' component={Develop}></Route>
            <Route path='/problems' component={Problems}></Route>
            <Route path='/understand' component={Understand}></Route>
            <Route path='/gooddetail' component={GoodDetail}></Route>                                                                                                       
             <Route path='/order' component={Order}></Route>
            <Route path='/shoppingcart' component={ShoppingCart}></Route>
            <Route path='/shoppinglist' component={ShopContainer}></Route>
            <Redirect from='/' to='/home'></Redirect>
          </Switch>
        </main>
        <footer>
          <Bottom></Bottom>
        </footer>
      </>
      


    );
  }
}

export default index;