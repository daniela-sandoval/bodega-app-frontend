import React, { Component } from 'react';
import Navbar from './Navbar';
import Profile from './Profile'
import Cart from './Cart'
import Store from './Store'
import { Switch, Route } from 'react-router-dom'
import Auth from './Auth'

class Bodega extends Component {
  state = {
    // items: [],
    categories: [],
    currentCart: [],
    currentUserInfo: []
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/profile", {
      headers: {
        "Authorization": localStorage.token
      }
    })
    .then(resp => resp.json())
    .then(data => {console.log(data)
      this.setState({
        currentUserInfo: data
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
    // .then(
    //   fetch("http://localhost:3000/api/v1/profile", {
    //     headers: {
    //       "Authorization": localStorage.token
    //     }
    //   })
    //   .then(resp => resp.json())
    //   .then(data => {
    //     this.setState({
    //       currentUserInfo: data
    //     })
    //   })
    // )
    // .then(res => res.json())
    // .then(data => {
    //   const currentCart = this.getCurrentCart(currentCartId)
    //   const currentCartItems = currentCart.items
    //   const updatedCartItems = [...currentCartItems, data.item]
    //
    //   const updatedUser = {
    //     ...this.state.currentUserInfo,
    //   }
  }

  getCurrentCart = (id) => {
    return this.state.currentUserInfo.carts.find(cart => cart.id === id)
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
