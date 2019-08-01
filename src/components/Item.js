import React, { Component } from 'react';
import { Card, Button, Icon, Image } from 'semantic-ui-react';
import '../Stylesheets/Item.scss';


class Item extends Component {
  handleClick = () => {
    this.props.makeCartItem(this.props)
  }

  render() {
    return (
      <Card className="item-card">
        <Image className="food-pic" src={this.props.img_url} alt="food item" wrapped ui={false} />
        <Card.Content>
          <Card.Header>{this.props.name}</Card.Header>
          <Card.Description>
            {this.props.description}
          </Card.Description>
          <br/>
          <Button onClick={this.handleClick} animated='vertical'>
            <Button.Content hidden>Shop</Button.Content>
            <Button.Content visible>
              <Icon name='shop' />
            </Button.Content>
          </Button>
        </Card.Content>
        <Card.Content extra>
          <span>
            <Icon name='money bill alternate outline' />
            $ {this.props.price}
          </span>
        </Card.Content>
      </Card>
    );
  }

}

export default Item;

  //
  // <div class="card" onMouseOver={this.handleMouse}>
  //     <div class="blurring dimmable image">
  //       <div class="ui inverted dimmer">
  //         <div class="content">
  //           <div class="center">
  //             <div class="ui primary button">Add to Cart</div>
  //           </div>
  //         </div>
  //       </div>
  //       <img src={this.props.img_url} width="50px" alt="food item" height="50px"/>
  //     </div>
  //     <div class="content">
  //       <span class="header">{this.props.name}</span>
  //       <div class="meta">
  //         <span class="date">{this.props.description}</span>
  //       </div>
  //     </div>
  //     <div class="extra content">
  //       <span class="date">{this.props.price}</span>
  //     </div>
  //   </div>
