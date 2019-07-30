import React, { Component } from 'react'

export default class Login extends Component {
  state = {
    username: "",
    password: ""
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.loginUser(this.state)
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
        this.props.history.push("/home")
      }
    })
  }

  handleClick = () => {
    this.props.history.push("/register")
  }

  render() {
    return (
      <div>
        <h1>LOGIN PLS</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="username" onChange={this.handleChange} value={this.state.username} />
          <input type="password" name="password" onChange={this.handleChange} value={this.state.password} />
          <input type="submit"/>
        </form>
        <button onClick={this.handleClick}>New User?</button>
      </div>
    )
  }

}

// this.props.history.push('/profile')
