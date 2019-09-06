import React, { Component } from 'react';
import DisplayItem from './displayItem'
import { Card } from 'semantic-ui-react'
import '../Stylesheets/Cart.scss'

export default class Cart extends Component {


  checkMoney = () => {
    if(this.props.wallet >= this.props.currentTotal) {
      return (
        <div>
        <br/>
        {this.props.cartItems[0] ? <button className="btns" onClick={this.handleClick}>Pay Now?</button> : null}
        </div>
        )} else {
      return (
        <div>
          <p>You don't have enough money in your wallet! Add money in your Profile</p>
        </div>
        )}
  }

  handleClick = (e) => {
    this.props.payCart()
  }

  generateItems = () => {
    console.log(this.props)
    return this.props.cartItems.map((item, i) => {
    return <DisplayItem deleteCartItem={this.props.deleteCartItem} key={i} {...item} />
    })
  }

  render () {
    if(this.props.cartItems) {
      return (
        <div className="cart">
          <div className="current-items">
          <h1>Current items:</h1>
          <Card.Group className="display-con">
            {this.generateItems()}
          </Card.Group>
          </div>
          <div className="current-total">
          <h1>Current Total: ${this.props.currentTotal}</h1>
          {this.checkMoney()}
          </div>
        </div>
      )
    } else {
      return (
      <div className="empty-cart">
      <h1>Your cart is empty</h1>
      </div>
      )
    }
  }

}
