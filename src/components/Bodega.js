import React, { Component } from 'react';
import Navbar from './Navbar';
import Profile from './Profile'
import Cart from './Cart'
import Store from './Store'
import { Switch, Route } from 'react-router-dom'
import Auth from './Auth'

class Bodega extends Component {
  state = {
    categories: [],
    currentUserInfo: [],
    currentCart: []
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/profile", {
      headers: {
        "Authorization": localStorage.token
      }
    })
    .then(resp => resp.json())
    .then(data => { console.log(data.carts)
      this.setState({
        currentUserInfo: data,
        currentCart: data.carts[data.carts.length - 1]
      })
    })
    fetch("http://localhost:3000/api/v1/categories")
    .then(resp => resp.json())
    .then(categories => {
      this.setState({ categories: categories })
    })
  }

  makeCartItem = (itemId) => {
    let currentCartId = this.state.currentUserInfo.carts[this.state.currentUserInfo.carts.length - 1].id
    fetch("http://localhost:3000/api/v1/cart_items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": localStorage.token
      },
      body: JSON.stringify({
        cart_id: currentCartId,
        item_id: itemId
      })
    })
    .then(
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
    )
  }

  render() {
    console.log(this.state)
    return (
      <div>
      <Navbar />
      <Switch>
        <Route path='/bodega/profile' render={(routerProps) => <Profile router={routerProps} userData={this.state.currentUserInfo} />} />

        <Route path='/bodega/cart' render={(routerProps) => <Cart router={routerProps} userData={this.state.currentUserInfo} />}/>

        <Route path='/bodega' render={(routerProps) => <Store makeCartItem={this.makeCartItem}router={routerProps} items={this.state.items} categories={this.state.categories}/>} />
      </Switch>
      </div>
    )
  }
}

export default Auth(Bodega, localStorage)
