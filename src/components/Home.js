import React, { Component } from 'react';
import Auth from './Auth'

class Home extends Component {

  render() {
    console.log(this.props)
    return (
      <div>
      Welcome home!
      </div>
    )
  }
}

export default Auth(Home, localStorage);
