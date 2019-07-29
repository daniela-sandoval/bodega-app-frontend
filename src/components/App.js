import React, { Component } from 'react';
import Login from './Login';
import { Switch, Route } from 'react-router-dom'
import Register from './Register'
import '../App.css';

export default class App extends Component{
  state = {
    items: [],
    currentCart: []
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
          currentCart: data.carts[data.carts.length - 1].items
        })
      })
    }
    fetch("http://localhost:3000/api/v1/items")
    .then(resp => resp.json())
    .then(items => {
      this.setState({ items: items })
    })
  }

  loginUser = (user) => {
    fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(user)
    })
    .then(resp => resp.json())
    .then(data => {
      if(data.token) {
        localStorage.token = data.token
      }
    })
  }


  render() {
    return (
      <Switch>
        <Route path='/register' render={(...routerProps) => <Register {...routerProps}/>} />
        <Route path='/home' >
        <Route path='/' render={(...routerProps) => <Login {...routerProps} loginUser={this.loginUser}/>} />
      </Switch>
    )
  }

}


// <Login loginUser={this.loginUser}/>
