import React, { Component } from 'react';

import Navbar from './Navbar';
import Auth from './Auth'

class Home extends Component {
  render() {
    return (
      <div>
      <Navbar />
      
      </div>
    )
  }
}

export default Auth(Home, localStorage)
// currentCart: data.carts[data.carts.length - 1].items,
