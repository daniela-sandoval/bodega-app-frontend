import React, { Component } from 'react';
import Item from './Item'

class ItemList extends Component {


  generateItems = () => {
    return this.props.category.items.map((item, i) => {
    return <Item key={i} {...item} />
    })
  }


  render() {
    // console.log(this.props.category.items)
    //   if (this.props.category.items.length !== 0) {
  console.log(this.props.category.items)
  return (
    <div className="item-list">
    {this.generateItems()}
    </div>
    )
  }

}

export default ItemList;
