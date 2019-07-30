import React, { Component } from 'react';
import Login from './Login';
import Register from './Register'
import Bodega from './Bodega'
import { Switch, Route } from 'react-router-dom'
import '../App.css';

export default class App extends Component{

  render() {
    return (
      <Switch>
        <Route path='/register' component={Register} />
        <Route path='/bodega' component={Bodega}/>
        <Route exact path='/' component={Login} />
      </Switch>
    )
  }

}
// <Route path='/bodega' component={Auth(Bodega, localStorage)}/>
