import React, { Component } from 'react'
import Auth from './Auth'
import '../Stylesheets/MoneyForm.scss'

class MoneyForm extends Component {
  state = {
    amount: 0,
    newAmount: this.props.currentMoney
  }

  handleClick = () => {
    this.props.toggleForm()
  };

  handleChange = (event) => {
    if (event.target.value > 0) {
    this.setState({
      amount: parseInt(event.target.value),
      newAmount: parseInt(this.props.currentMoney) + parseInt(event.target.value)
    })

  }}

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.updateWallet(this.state.amount)
    this.props.toggleForm()
  }

  render() {
    return (
      <div className="modal">
        <div className="modal-pic">
          <span className="close" onClick={this.handleClick}>&times;</span>
          <div className="modal-content">
            <p>New Total: ${this.state.newAmount}</p>
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="amount">Amount: </label>
              <input id="amount" type="number" onChange={this.handleChange} value={this.state.amount}/>
              <br></br>
              <button className="btns" type="submit" value="Submit">submit</button>
            </form>
          </div>
        </div>
      </div>
    )
  }

}

export default Auth(MoneyForm, localStorage)
