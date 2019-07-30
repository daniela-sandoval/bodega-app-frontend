import React, { Component } from 'react';
import Login from './Login';
import Register from './Register'
import Bodega from './Bodega'
import { Switch, Route } from 'react-router-dom'
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
        <Route path='/register' component={Register} />
        <Route path='/bodega' render={(routerProps) => <Bodega router={routerProps} currentCart={this.state.currentCart} items={this.state.items}/>}/>
        <Route exact path='/' component={Login} />
      </Switch>
    )
  }

}

// <Route path='/home' component={Auth(Home, localStorage)}/>
