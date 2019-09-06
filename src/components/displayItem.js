import React, { Component } from 'react';
import { Card, Button, Icon, Image } from 'semantic-ui-react';
import '../Stylesheets/DisplayItem.scss'


class DisplayItem extends Component {

  handleClick = () => {
    this.props.deleteCartItem(this.props)
  }

  render() {
    console.log(this.props)
    return (
      <Card className="dis-item">
        <Image src={this.props.img_url} alt="food item" wrapped ui={false} className="food-pic"/>
        <Card.Content>
          <Card.Header>{this.props.name}</Card.Header>
          <Card.Description>
            {this.props.description}
            <br/>
            <Button onClick={this.handleClick} animated='vertical'>
              <Button.Content hidden className="delete-btn">Delete</Button.Content>
              <Button.Content visible>
                <Icon name='trash alternate' />
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

export default DisplayItem;
