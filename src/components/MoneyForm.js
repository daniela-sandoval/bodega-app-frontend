import React, { Component } from 'react'
import Auth from './Auth'
import '../Stylesheets/MoneyForm.scss'

class MoneyForm extends Component {
  state = {
    amount: 0,
    newAmount: this.props.currentMoney
  }

  handleClick = () => {
    this.props.toggleForm();
  };

  handleChange = (event) => {
    this.setState({
      amount: parseInt(event.target.value),
      newAmount: parseInt(this.props.currentMoney) + parseInt(event.target.value)
    })
  }

  render() {
    return (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={this.handleClick}>&times;</span>
          <p>New Total: ${this.state.newAmount}0</p>
          <form>
            <label htmlFor="amount">Amount: </label>
            <input id="amount" type="number" onChange={this.handleChange} value={this.state.amount}/>
          </form>
        </div>
      </div>
    )
  }

}

export default Auth(MoneyForm, localStorage)
