import React, { Component } from 'react';
import DisplayItem from './displayItem'
import { Card } from 'semantic-ui-react'
import '../Stylesheets/Cart.scss'
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';

export default class Cart extends Component {

  state = {
    show: false
  }

  componentDidMount () {
    this.props.fetchCart()
  }

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
    this.setState({show: true})
  }
  generateItems = () => {
    return this.props.cartItems.map((item, i) => {
    return <DisplayItem deleteCartItem={this.props.deleteCartItem} key={i} {...item} />
    })
  }
  render () {
    if(this.props.cartItems) {
      return (
        <div className="cart">
          {this.props.cartItems[0] ? (
            <div className="current-items">
              <h1>Current Items</h1>
              <Card.Group className="display-con">
              {this.generateItems()}
              </Card.Group>
            </div>
            ) : (
            <div className="empty-cart">
              <h1>Your cart is empty</h1>
            </div>
            )}
          <div className="current-total">
          <h1>Current Total: ${this.props.currentTotal}</h1>
          {this.checkMoney()}
          </div>
          <SweetAlert
          show={this.state.show}
          title="Cart Successfully Paid"
          text=""
          onConfirm={() => this.setState({ show: false })}
          onOutsideClick={() => this.setState({ show: false })}
          />
        </div>
      )
    } else {
      return <div>fetching your cart! {this.props.fetchCart()}</div>
    }
  }
}
