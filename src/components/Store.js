import React, { Component } from 'react';
import Auth from './Auth'
import LeftShelf from './LeftShelf'

class Store extends Component {

  render() {
    // console.log(this.props)
    return (
      <div className="store-wrapper">
      <h1>La Bodega</h1>
      <LeftShelf items={this.props} />
      </div>
    );
  }

}

export default Auth(Store, localStorage)
