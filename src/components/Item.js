import React, { Component } from 'react';
import { Card, Button, Icon, Image } from 'semantic-ui-react';
import '../Stylesheets/Item.scss';
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';


class Item extends Component {

  state = {
    show: false
  }

  handleClick = () => {
    this.props.makeCartItem(this.props)
    this.setState({show: true})
  }

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

        <SweetAlert
        show={this.state.show}
        title="Added to Cart"
        text=""
        onConfirm={() => this.setState({ show: false })}
        onOutsideClick={() => this.setState({ show: false })}
        />

      </Card>
    );
  }

}

export default Item;
