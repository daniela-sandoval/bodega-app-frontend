import React, { Component } from 'react';
import Login from './Login';
import Register from './Register'
import Home from './Home'
import Auth from './Auth'
import { Switch, Route, Redirect } from 'react-router-dom'
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


  render() {
    return (
      <Switch>
        <Route path='/register' render={(...routerProps) => <Register {...routerProps}/>} />
        <Route path='/home' component={Auth(Home, localStorage)}/>
        <Route path='/' component={Login} />
      </Switch>
    )
  }

}


// <Route path='/home' render={(...routerProps) => <Home {...routerProps} currentCart={this.state.currentCart} items={this.state.items}/>}/>
// <Login loginUser={this.loginUser}/>
