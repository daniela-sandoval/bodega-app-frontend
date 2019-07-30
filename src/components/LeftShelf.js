import React, { Component } from 'react';
import Select from 'react-select';

class LeftShelf extends Component {

  state = {
    category: ""
  }

  generateOptions = () => {
      console.log(this.props.items.items)
    // this.props.items.map((item) => {
    //   return item.name
    //   })
    // debugger
  }

  handleChange = (e) => {
    console.log(e.target.value)
  }

  render() {
    if (this.props.items) {
      return (
        <div>
        {this.generateOptions()}
        <h3>{this.state.category}</h3>
        </div>
        )
    } else {
      return null
    }
  }

}

// <select id="category" name="category" onChange={this.handleChange} value={this.state.category}>
// <option value="default">choose a category</option>
// <option value="fruits">fruits</option>
// <option value="chips">chips</option>
// </select>
export default LeftShelf;
