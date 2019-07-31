import React, { Component } from 'react';
import Auth from './Auth'
import Shelf from './Shelf'

class Store extends Component {

  render() {
    const leftCategories = this.props.categories.filter(category => category.shelf.name === "Left")
    const rightCategories = this.props.categories.filter(category => category.shelf.name === "Right")
    
    return (
      <div className="store-wrapper">
      <h1>La Bodega</h1>
      <Shelf position="Left" categories={leftCategories}/>
      <Shelf position="Right" categories={rightCategories}/>
      </div>
    );
  }

}

export default Auth(Store, localStorage)
