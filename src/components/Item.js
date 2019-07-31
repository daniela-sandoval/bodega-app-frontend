import React, { Component } from 'react';

class Item extends Component {

  render() {
    console.log(this.props)
    return (
      <div>
      <h3>{this.props.name}</h3>
      <img src={this.props.img_url} width="50px" height="50px"/>
      <p>{this.props.description}</p>
      <p>{this.props.price}</p>
      </div>
    );
  }

}

export default Item;
