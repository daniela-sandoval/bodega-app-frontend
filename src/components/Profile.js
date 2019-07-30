import React, { Component } from 'react';

export default class Profile extends Component {
  render () {
    if(this.props.userData.id) {
      return (
        <div>
          <h1>Name:{this.props.userData.username}</h1>
          <p>{this.props.userData.carts[this.props.userData.carts.length - 1].total_price}</p>
        </div>
      )
    } else {
      return null
    }
  }
}
// currentCart: data.carts[data.carts.length - 1].items,

// <p>{this.props.userData.carts[this.props.userData.carts.length - 1].total_price}</p>

// <p>Last Cart Total: {this.props.userData.carts[this.props.userData.carts.length - 2].total_price}</p>
// <p>Current Cart Total: {this.props.userData.carts[this.props.userData.carts.length - 1].total_price}</p>
