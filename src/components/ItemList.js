import React, { Component } from 'react';
import { Card } from 'semantic-ui-react'
import Item from './Item'

class ItemList extends Component {


  generateItems = () => {
    return this.props.category.items.map((item, i) => {
    return <Item makeCartItem={this.props.makeCartItem} key={i} {...item} />
    })
  }


  render() {
  console.log(this.props.category.items)
  return (
    <Card.Group itemsPerRow={1}>
      {this.generateItems()}
    </Card.Group>
    )
  }
  
}

export default ItemList;
