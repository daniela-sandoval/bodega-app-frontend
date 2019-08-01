import React, { Component } from 'react';
import { Card, Button, Icon, Image } from 'semantic-ui-react';
import '../Stylesheets/Item.scss';


class Item extends Component {
  handleClick = () => {
    this.props.makeCartItem(this.props)
  }
  debugger
  render() {
    return (
      <Card className="item-card">
        <Image className="food-pic" src={this.props.img_url} alt="food item" wrapped ui={false} />
        <Card.Content>
          <Card.Header className="description-con">{this.props.name}</Card.Header>
          <Card.Description>
            {this.props.description}
            <br/>
            <Button onClick={this.handleClick} animated='vertical'>
              <Button.Content hidden className="add-btn">Shop</Button.Content>
              <Button.Content visible>
                <Icon name='shop' />
              </Button.Content>
            </Button>
          </Card.Description>
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
