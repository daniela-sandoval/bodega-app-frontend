import React, { Component } from 'react';
import { Card, Button, Icon, Image } from 'semantic-ui-react';


class DisplayItem extends Component {
  handleClick = () => {
    this.props.deleteCartItem(this.props.id)
  }

  render() {
    console.log(this.props)
    return (
      <Card>
        <Image src={this.props.img_url} alt="food item" wrapped ui={false} />
        <Card.Content>
          <Card.Header>{this.props.name}</Card.Header>
          <Card.Description>
            {this.props.description}
          </Card.Description>
          <br/>
          <Button onClick={this.handleClick} animated='vertical'>
            <Button.Content hidden>Delete</Button.Content>
            <Button.Content visible>
              <Icon name='window close outline' />
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

export default DisplayItem;
