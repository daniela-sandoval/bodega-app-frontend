import React, { Component } from 'react';
import Navbar from './Navbar';
import Profile from './Profile'
import Cart from './Cart'
import { Switch, Route } from 'react-router-dom'
import Auth from './Auth'
import "../Stylesheets/Bodega.scss";

class Bodega extends Component {
  state = {
    items: [],
    currentUserInfo: []
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/profile", {
      headers: {
        "Authorization": localStorage.token
      }
    })
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        currentUserInfo: data
      })
    })

    fetch("http://localhost:3000/api/v1/items")
    .then(resp => resp.json())
    .then(items => {
      this.setState({ items: items })
    })
  }

  render() {
    return (
      <div>
      <Navbar />
      <Switch>
        <Route path='/bodega/profile' render={(routerProps) => <Profile router={routerProps} userData={this.state.currentUserInfo} />} />

        <Route path='/bodega/cart' component={Cart}/>
      </Switch>
      </div>
    )
  }
}

export default Auth(Bodega, localStorage)
