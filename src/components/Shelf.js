import React, { Component } from 'react';
import Select from 'react-select';
import ItemList from './ItemList'
import '../Stylesheets/Shelf.scss'

class Shelf extends Component {

  state = {
    category: ""
  }

  generateOptions = () => {
    return this.props.categories.map(category => {
      const container = {}
      container.label = category.name
      container.value = category.id
      return container
      })
  }

  handleChange = (e) => {
    let selectedCategory =  this.props.categories.find(category => category.id === e.value)
    this.setState({category: selectedCategory})
  }

  showItemList = () => {
    if (this.state.category !== "") {
      return <ItemList makeCartItem={this.props.makeCartItem} category={this.state.category} />
    }
  }

  closeShelf = (e) => {
    this.setState({category: ""})
  }

  render() {
    if (this.props.categories.length !== 0) {
      return (
        <div className="Filter">
          <button onClick={this.closeShelf} className="reset-btn">reset</button> 
          <br/>
          <label className="shelf-name">
          {this.props.position === "Left" ? '🍎THE PANTRY🥖' : '🍦THE COUNTER🥤'}
            <Select id={this.props.position === "Left" ? 'Left' : 'Right'} options={this.generateOptions()} onChange={this.handleChange} className="select-bar" placeholder="Select..."/>
          </label>
          <h3>{this.state.category.name}</h3>
          {this.showItemList()}
        </div>
        )
    } else {
      return null
    }
  }

}
export default Shelf;
