import React, { Component } from 'react';
import RequireAuth from './RequireAuth'

class Home extends Component {
  render() {
    return (
      <div>
      Welcome home!
      </div>
    )
  }
}

export default RequireAuth(Home);
