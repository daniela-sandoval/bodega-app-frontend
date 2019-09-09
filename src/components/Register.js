import React, { Component } from 'react';
import "../Stylesheets/register.scss";
import BodegaPic from '../images/bodega.png'

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

  handleClick = () => {
    this.props.history.push("/")
  }

  render() {
    return (
      <div className="landing-page">
        <div className="store">
          <div className="store-pic">
            <img src={BodegaPic} alt="floating-store"/>
          </div>
          <div className="shadow"></div>
        </div>
        <div className="register">
          <form onSubmit={this.handleSubmit} className="register-form">
          <h1>LA BODEGA</h1> 
          <h4>REGISTER</h4>
          <div className="user-in">
            <label htmlFor="username">Username: </label>
            <input className="user-input" id="username" type="text" name="username" onChange={this.handleChange} value={this.state.username} /><br/>
          </div>
          <div className="user-pass">
            <label htmlFor="pass">Password: </label>
            <input className="user-input" id="pass" type="password" name="password" onChange={this.handleChange} value={this.state.password} /><br/>
            </div>
            <input className="btns" type="submit" value="OPEN"/>
          </form>
          <button className="btns" onClick={this.handleClick}>Returning User ?</button>
        </div>
      </div>
    )
  }

}
