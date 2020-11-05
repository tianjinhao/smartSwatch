import React, { Component } from 'react';
import {Switch, Route } from 'react-router-dom'

import Login from '@ad/login/Login';
import Reg from '@ad/reg/Reg';
import BackPassword from '@ad/backPassword/BackPassword';
import Back2 from '@ad/backPassword/Back2';
import Back3 from '@ad/backPassword/Back3';
import Back4 from '@ad/backPassword/Back4';

export default class App extends Component {
  render() {
    return (
        <Switch>
          <Route path="/reglogin/login" component={Login}></Route>
          <Route path="/reglogin/reg" component={Reg}></Route>
          <Route path="/reglogin/backpassword" component={BackPassword}></Route>
          <Route path="/reglogin/backpassword2" component={Back2}></Route>
          <Route path="/reglogin/backpassword3" component={Back3}></Route>
          <Route path="/reglogin/backpassword4" component={Back4}></Route>
        </Switch>
    );
  }
}
