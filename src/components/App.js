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
      .then(console.log)
    }
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

  signUpUser = (user) =>{
    fetch("http://localhost:3000/api/v1/signup", {
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
        <Route exact path='/' render={(...routerProps) => <Login {...routerProps} loginUser={this.loginUser}/>} />
        <Route path='/register' render={(...routerProps) => <Register {...routerProps} signUpUser={this.signUpUser}/>} />
      </Switch>
    )
  }

}


// <Login loginUser={this.loginUser}/>
