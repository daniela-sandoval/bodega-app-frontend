import React, { Component } from 'react';
import { Card } from 'semantic-ui-react'
import Item from './Item'
import '../Stylesheets/ItemList.scss'

class ItemList extends Component {


  generateItems = () => {
    return this.props.category.items.map((item, i) => {
    return <Item makeCartItem={this.props.makeCartItem} key={i} {...item} />
    })
  }


  render() {
    // console.log(this.props.category.items)
    //   if (this.props.category.items.length !== 0) {
  console.log(this.props.category.items)
  return (
    <Card.Group itemsPerRow={2} className="item-holder">
      {this.generateItems()}
    </Card.Group>
    )
  }

}

export default ItemList;
