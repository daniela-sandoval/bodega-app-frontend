import React, { Component } from 'react';
import DisplayItem from './displayItem'
import { Card } from 'semantic-ui-react'
import '../Stylesheets/Cart.scss'

export default class Cart extends Component {

  state = {
    currentMoney: null,
    canPay: ""
  }

  // checkMoney = () => {
  //   if(this.props.userData.wallet > this.props.userData.carts[this.props.userData.carts.length - 1].total_price) {
  //     this.setState({ canPay: true })
  //   } else {
  //     this.setState({ canPay: false })
  //   }
  // }

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
          <h1>Current Total: ${this.props.cartItems.total_price}</h1>
          <br/>
          <button className="btns" >Pay Now?</button>
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
