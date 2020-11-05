import React, { Component } from "react";
import {   Route, Switch } from 'react-router-dom'

import Index from "./view/Index";
import RegLogin from "./view/RegLogin";

class App extends Component {
  render() {
    return (
      // <Index></Index>
      <Switch>
        <Route path="/reglogin" component={RegLogin}></Route>
        <Route  path="/" component={Index}></Route>
      </Switch>
    );
  }
}

export default App;
