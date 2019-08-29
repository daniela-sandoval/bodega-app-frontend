import React, { Component } from 'react';
import MoneyForm from './MoneyForm'
import '../Stylesheets/Profile.scss'

export default class Profile extends Component {
  state = {
    moneyForm: false
  }

  toggleForm = (e) => {
    this.setState({
      moneyForm: !this.state.moneyForm
    })
  }

  render () {
    if(this.props.userData && this.props.userData.id) {
      return (
        <div className="profile-container">
          <h1>Name: {this.props.userData.username}</h1>
          <div className="profile-card">
            {this.props.previousTotal ? <div className="last-cart"> <p>Previous Cart Total: <br></br> ${this.props.previousTotal}</p> </div> : null}
          <p>Current Cart Total: <br></br> ${this.props.currentTotal}</p>
          <p>Wallet: <br></br> ${this.props.wallet}</p>
          <button className="btns" onClick={this.toggleForm}>ADD MONEY</button>
          {this.state.moneyForm ? <MoneyForm currentMoney={this.props.wallet} toggleForm={this.toggleForm} updateWallet={this.props.updateWallet}/> : null}
          </div>
        </div>
      )
    } else {
      return null
    }
  }

}
