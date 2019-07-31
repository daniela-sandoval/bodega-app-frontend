import React, { Component } from 'react'
import "../Stylesheets/login.scss";

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
        this.props.history.push("/bodega")
      }
    })
  }

  handleClick = () => {
    this.props.history.push("/register")
  }

  render() {
    return (
      <div className="login">
        <h1>LA BODEGA</h1>
        <h4>LOGIN</h4>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">Username: </label>
          <input className="user-input" id="username" type="text" name="username" onChange={this.handleChange} value={this.state.username} /><br/>

          <label htmlFor="pass">Password: </label>
          <input className="user-input" id="pass" type="password" name="password" onChange={this.handleChange} value={this.state.password} /><br/>
          <input className="btns" type="submit"/>
        </form>
        <button className="btns" onClick={this.handleClick}>New User?</button>
      </div>
    )
  }

}

// this.props.history.push('/profile')
