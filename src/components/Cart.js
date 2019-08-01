import React, { Component } from 'react';
import DisplayItem from './displayItem'
import { Card } from 'semantic-ui-react'
import '../Stylesheets/Cart.scss'

export default class Cart extends Component {

  // state = {
    // currentMoney: null,
  //   canPay: false
  // }

  checkMoney = () => {
    if(this.props.wallet >= this.props.currentTotal) {
      return (
        <div>
        <br/>
        <button className="btns" onClick={this.handleClick}>Pay Now?</button>
        </div>
        )} else {
      return (
        <div>
          <p>You don't have enough money in your wallet! Add money in your Profile</p>
        </div>
        )}
  }

  handleClick = (e) => {
    // console.log(e)
    this.props.payCart(this.props)
  }

  generateItems = () => {
    return this.props.cartItems.map((item, i) => {
    return <DisplayItem deleteCartItem={this.props.deleteCartItem} key={i} {...item} />
    })
  }

  render () {
    if(this.props.cartItems[0]) {
      return (
        <div className="cart">
          <h1>Current items:</h1>
          <Card.Group className="display-con">
            {this.generateItems()}
          </Card.Group>
          <h1>Current Total: ${this.props.currentTotal}</h1>
          {this.checkMoney()}
        </div>
      )
    } else {
      return null
    }
  }

}

// <div>
//   <h1>Current items</h1>
//   <Card.Group>
//     {this.makeItems()}
//   </Card.Group>
// </div>
