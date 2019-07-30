import React, { Component } from 'react';
import Navbar from './Navbar';
import Profile from './Profile'
import Cart from './Cart'
import { Switch, Route } from 'react-router-dom'
import Auth from './Auth'

class Bodega extends Component {
  render() {
    return (
      <div>
      <Navbar />
      <Switch>
        <Route path='/bodega/profile' component={Profile} />
        <Route path='/bodega/cart' component={Cart}/>
      </Switch>
      </div>
    )
  }
}

export default Auth(Bodega, localStorage)
// currentCart: data.carts[data.carts.length - 1].items,
