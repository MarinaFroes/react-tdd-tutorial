import React, { Component } from 'react';
import 'materialize-css';
import { Row, Button, Modal } from 'react-materialize';

import NewRestaurantForm from './NewRestaurantForm';
import RestaurantList from './RestaurantList';

class RestaurantListPage extends Component {
  state = {
    restaurantNames: [],
    showNewRestaurantForm: false,
  }

  handleShowNewRestaurantForm = () => {
    this.setState({
      showNewRestaurantForm: true,
    });
  }

  handleAddRestaurant = (newRestaurantName) => {
    this.setState(state => ({
      restaurantNames: [
        newRestaurantName,
        ...state.restaurantNames,
      ],
      showNewRestaurantForm: false,
    }));
  }

  render() {
    const { restaurantNames } = this.state;
    return (
      <div>
        <Modal
          header="New Restaurant"
          trigger={
            <Button
              data-test="addRestaurantButton"
              onClick={this.handleShowNewRestaurantForm}
              waves="light"
            >
              Add Restaurant
            </Button>
          }
        >
          <NewRestaurantForm onSave={this.handleAddRestaurant} />
        </Modal>
        <Row>
          <RestaurantList restaurantNames={restaurantNames} />
        </Row>
      </div>
    );
  }
}

export default RestaurantListPage;
