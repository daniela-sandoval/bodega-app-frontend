import React, { Component } from 'react';
import Select from 'react-select';
import ItemList from './ItemList'

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
      return <ItemList category={this.state.category} />
    }
  }

  render() {
    if (this.props.categories.length !== 0) {
      return (
        <div>
          <div className="Filter">
            <label>
            {this.props.position} Shelf Category:
            <Select options={this.generateOptions()} onChange={this.handleChange}/>
            </label>
            <h3>{this.state.category.name}</h3>
            {this.showItemList()}
          </div>
          <div className="container-one">
          </div>
        </div>
        )
    } else {
      return null
    }
  }

}
export default Shelf;
