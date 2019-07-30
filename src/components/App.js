import React, { Component } from 'react';
import Login from './Login';
import Register from './Register'
import Home from './Home'
import { Switch, Route, Redirect } from 'react-router-dom'
import '../App.css';

export default class App extends Component{
  state = {
    items: [],
    currentUserInfo: []
  }

  componentDidMount() {
    if(localStorage.token) {
      fetch("http://localhost:3000/api/v1/profile", {
        headers: {
          "Authorization": localStorage.token
        }
      })
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          // currentCart: data.carts[data.carts.length - 1].items
          currentUserInfo: data
        })
      })
    }
    fetch("http://localhost:3000/api/v1/items")
    .then(resp => resp.json())
    .then(items => {
      this.setState({ items: items })
    })
  }


  render() {
    return (
      <Switch>
        <Route path='/register' component={Register}/>}/>
        <Route path='/home' render={(routerProps) => <Home router={routerProps} currentUserInfo={this.state.currentUserInfo} items={this.state.items}/>}/>
        <Route path='/' component={Login} />
      </Switch>
    )
  }

}
