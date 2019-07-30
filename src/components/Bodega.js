import React, { Component } from 'react';
import Navbar from './Navbar';
import Profile from './Profile'
import Cart from './Cart'
import Store from './Store'
import { Switch, Route } from 'react-router-dom'
import Auth from './Auth'

class Bodega extends Component {
  state = {
    items: [],
    currentUserInfo: []
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/profile", {
      headers: {
        "Authorization": localStorage.token
      }
    })
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        currentUserInfo: data
      })
    })

    fetch("http://localhost:3000/api/v1/items")
    .then(resp => resp.json())
    .then(items => {
      this.setState({ items: items })
    })
  }

  render() {
    return (
      <div>
      <Navbar />
      <Switch>
        <Route path='/bodega' render={(routerProps) => <Store router={routerProps} items={this.state.items} />} />
        <Route path='/bodega/profile' render={(routerProps) => <Profile router={routerProps} userData={this.state.currentUserInfo} />} />
        <Route path='/bodega/cart' component={Cart}/>
      </Switch>
      </div>
    )
  }
}

export default Auth(Bodega, localStorage)
