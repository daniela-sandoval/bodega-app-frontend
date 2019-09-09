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
    currentUserInfo: null,
    wallet: 0,
    currentCart: null,
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
        currentUserInfo: data.user,
        wallet: data.user.wallet,
        currentCart: data.current_cart,
        currentTotal: data.current_cart.total_price
      })
    })
    fetch("http://localhost:3000/api/v1/categories")
    .then(resp => resp.json())
    .then(categories => {
      this.setState({ categories: categories })
    })
  }

  fetchCart = () => {
    fetch("http://localhost:3000/api/v1/profile", {
      headers: {
        "Authorization": localStorage.token
      }
    })
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        currentUserInfo: data.user,
        wallet: data.user.wallet,
        currentCart: data.current_cart,
        currentTotal: data.current_cart.total_price
      })
    })
  }

  makeCartItem = (item) => {
    fetch("http://localhost:3000/api/v1/cart_items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": localStorage.token
      },
      body: JSON.stringify({
        cart_id: this.state.currentCart.id,
        item_id: item.id,
        name: item.name,
        price: item.price,
        img_url: item.img_url
      })
    })
    .then(res => res.json())
    .then(data => {
      this.setState({
        currentCart: data.cart,
        currentTotal: data.cart.total_price
        })
      })
  }

  deleteCartItem = (clickedItem) => {
    // let cartItems = this.state.currentCart.items
    // let newCartItems = cartItems.filter(item => !(item.id === clickedItem.id))
    fetch(`http://localhost:3000/api/v1/cart_items/${clickedItem.id}`, {
      method: "DELETE"
    })
    .then(res => res.json())
    .then(cart => {
      this.setState({
        currentTotal: cart.total_price,
        currentCart: cart
        })
      })
  }

  payCart = () => {
    let updatedWallet = this.state.wallet - this.state.currentTotal
    debugger
    fetch(`http://localhost:3000/api/v1/carts`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": localStorage.token
      },
      body: JSON.stringify({wallet: updatedWallet, id: this.state.currentUserInfo.id})
      })
      .then(res => res.json())
      .then(data => {
        console.log(this.state)
        debugger
        this.setState({
          currentUserInfo: data,
          wallet: data.wallet,
          currentCart: {},
          currentTotal: 0
        })
        })
  }

  updateWallet = (amount) => {
    let newAmount = this.state.wallet + amount
    let userId = this.state.currentUserInfo.id
    fetch(`http://localhost:3000/api/v1/users/${userId}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": localStorage.token
      },
      body: JSON.stringify({
        wallet: newAmount
        })
      })
      .then(res => res.json())
      .then(data => {
        this.setState({wallet: data.user.wallet})
        })
  }

  render() {
    console.log(this.state)
    if (this.state.currentCart) {
      return (
        <div>
        <Navbar />
        <Switch>
          <Route path='/bodega/profile' render={(routerProps) => <Profile router={routerProps} userData={this.state.currentUserInfo} wallet={this.state.wallet} currentTotal={this.state.currentTotal} updateWallet={this.updateWallet}/>} />

          <Route path='/bodega/cart' render={(routerProps) => <Cart deleteCartItem={this.deleteCartItem} payCart={this.payCart} router={routerProps} cartItems={this.state.currentCart.items} currentTotal={this.state.currentTotal} wallet={this.state.wallet} fetchCart = {this.fetchCart}/>}/>

          <Route path='/bodega' render={(routerProps) => <Store makeCartItem={this.makeCartItem} router={routerProps} categories={this.state.categories}/>} />
        </Switch>
        </div>
      )
    } else {return null}
  }
}

export default Auth(Bodega, localStorage)
