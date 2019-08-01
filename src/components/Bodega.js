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
    wallet: 0,
    currentCart: [],
    currentTotal: 0
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
        currentUserInfo: data,
        wallet: data.wallet,
        currentCart: data.carts[data.carts.length - 1].cart_items,
        currentTotal: data.carts[data.carts.length - 1].total_price
      })
    })
    fetch("http://localhost:3000/api/v1/categories")
    .then(resp => resp.json())
    .then(categories => {
      this.setState({ categories: categories })
    })
  }

  makeCartItem = (item) => {
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
        item_id: item.id,
        name: item.name,
        price: item.price,
        img_url: item.img_url
      })
    })
    .then(res => res.json())
    .then(data => {
      const newItem = {id: data.id, name: data.item.name, img_url: data.item.img_url,  price: data.item.price, cart_id: data.cart.id, item_id: data.item.id}
      this.setState({
        currentCart: [...this.state.currentCart, newItem],
        currentTotal: this.state.currentTotal + newItem.price
        })
      })
  }

  deleteCartItem = (clickedItem) => {
    let cart = this.state.currentCart
    let newCartItems = cart.filter(item => !(item.id === clickedItem.id))
    this.setState({ currentCart: newCartItems })
    fetch(`http://localhost:3000/api/v1/cart_items/${clickedItem.id}`, {
      method: "DELETE"
    })
    .then(() => {
      this.setState({
        currentTotal: this.state.currentTotal - clickedItem.price
        })
      })
  }

  payCart = (cart) => {
    // console.log(cart)
    // debugger
    fetch(`http://localhost:3000/api/v1/carts`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": localStorage.token
      },
      body: JSON.stringify({
        user_id: this.state.currentUserInfo.id
      })
      })
      .then(res => res.json())
      .then(data => {
        this.setState({
          currentCart: [],
          wallet: this.state.wallet - cart.currentTotal,
          currentTotal: 0
          })
        })
  }
<<<<<<< HEAD

=======

>>>>>>> 83a7ecdb8d3afcb096f0ff2d26f26d9e2451388f
  render() {
    // console.log(this.state)

    return (
      <div>
      <Navbar />
      <Switch>
        <Route path='/bodega/profile' render={(routerProps) => <Profile router={routerProps} userData={this.state.currentUserInfo} />} />

<<<<<<< HEAD
        <Route path='/bodega/cart' render={(routerProps) => <Cart deleteCartItem={this.deleteCartItem} router={routerProps} cartItems={this.state.currentCart} />}/>
=======
        <Route path='/bodega/cart' render={(routerProps) => <Cart deleteCartItem={this.deleteCartItem} payCart={this.payCart} router={routerProps} cartItems={this.state.currentCart} currentTotal={this.state.currentTotal} wallet={this.state.wallet}/>}/>
>>>>>>> 83a7ecdb8d3afcb096f0ff2d26f26d9e2451388f

        <Route path='/bodega' render={(routerProps) => <Store makeCartItem={this.makeCartItem} router={routerProps} currentCart={this.state.currentCart} categories={this.state.categories}/>} />
      </Switch>
      </div>
    )
  }
}

// const currentCart = this.getCurrentCart(currentCartId)
// const currentCartItems = currentCart.items
// const updatedCartItems = [...currentCartItems, data.item]
//
// const updatedUser = {
//   ...this.state.currentUserInfo
// }

export default Auth(Bodega, localStorage)
