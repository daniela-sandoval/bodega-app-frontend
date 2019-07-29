import React, { Component } from 'react';

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
    this.props.signUpUser(this.state)
  }

  render() {
    return (
      <div>
        <h1>REGISTER PLS</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="username" onChange={this.handleChange} value={this.state.username} />
          <input type="password" name="password" onChange={this.handleChange} value={this.state.password} />
          <input type="submit" />
        </form>
      </div>
    )
  }

}
