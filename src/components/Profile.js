import React, { Component } from 'react';
import MoneyForm from './MoneyForm'

export default class Profile extends Component {
  state = {
    moneyForm: false
  }

  toggleForm = (e) => {
    this.setState({
      moneyForm: !this.state.moneyForm
    })
  }

  render () {
    if(this.props.userData.id) {
      return (
        <div>
          <h1>Name: {this.props.userData.username}</h1>
          <p>Last Cart Total: {this.props.userData.carts.length === 1 ? "This is your first cart!" : this.props.userData.carts[this.props.userData.carts.length - 2].total_price }</p>
          <p>Current Cart Total: ${this.props.userData.carts[this.props.userData.carts.length - 1].total_price}</p>
          <p>Wallet: ${this.props.userData.wallet}</p>
          <button onClick={this.toggleForm}>ADD MONEY</button>
          {this.state.moneyForm ? <MoneyForm currentMoney={this.props.userData.wallet}toggleForm={this.toggleForm}/> : null}
        </div>
      )
    } else {
      return null
    }
  }

}
