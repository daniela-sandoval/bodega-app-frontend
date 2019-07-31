import React, { Component } from 'react';
import Select from 'react-select';

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
    console.log(e)
    this.setState({category: e.label})
  }

  render() {
    if (this.props.categories.length !== 0) {
      return (
        <div>
        <label>
        {this.props.position} Shelf Category:
        <Select options={this.generateOptions()} onChange={this.handleChange}/>
        </label>
        <h3>{this.state.category}</h3>
        </div>
        )
    } else {
      return null
    }
  }

}
export default Shelf;
