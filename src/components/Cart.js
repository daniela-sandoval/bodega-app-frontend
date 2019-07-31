import React, { Component } from 'react';
import DisplayItem from './displayItem'
import { Card } from 'semantic-ui-react'

export default class Cart extends Component {

  state = {
    currentMoney: this.props.userData.wallet,
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
    let user = this.props.userData
    return user.carts[user.carts.length - 1].items.map((item, i) => {
    return <DisplayItem key={i} {...item} />
    })
  }

  render () {
    if(this.props.userData.id) {
      return (
        <div>
          <h1>Current items:</h1>
          <Card.Group>
            {this.generateItems()}
          </Card.Group>
          <h4>Current Total: ${this.props.userData.carts[this.props.userData.carts.length - 1].total_price}0</h4>
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
