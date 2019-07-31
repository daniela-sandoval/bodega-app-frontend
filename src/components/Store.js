import React, { Component } from 'react';
import Auth from './Auth'
import Shelf from './Shelf'
import '../Stylesheets/Store.scss'

class Store extends Component {

  render() {
    const leftCategories = this.props.categories.filter(category => category.shelf.name === "Left")
    const rightCategories = this.props.categories.filter(category => category.shelf.name === "Right")
    
    return (
      <div className="store-wrapper">
      <h1>La Bodega</h1>
      <Shelf className="left" position="Left" categories={leftCategories}/>
      <Shelf className="right" position="Right" categories={rightCategories}/>
      <div className="container"></div>
      </div>
    );
  }

}

export default Auth(Store, localStorage)
