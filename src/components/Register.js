import React, { Component } from 'react';
import "../Stylesheets/register.scss";

export default class Register extends Component {
  state = {
    username: "",
    password: ""
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.signUpUser(this.state)

  }

  signUpUser = (user) => {
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
        this.props.history.push("/bodega")
      }
    })
  }

  render() {
    return (
      <div className="register">
        <h1>LA BODEGA</h1>
        <h4>REGISTER PLS</h4>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">Username: </label>
          <input id="username" type="text" name="username" onChange={this.handleChange} value={this.state.username} /><br/>

          <label htmlFor="pass">Password: </label>
          <input id="pass" type="password" name="password" onChange={this.handleChange} value={this.state.password} /><br/>
          <input className="btns" type="submit" />
        </form>
      </div>
    )
  }

}
